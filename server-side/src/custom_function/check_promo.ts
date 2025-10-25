import { Promo } from "../models/promo.model";
import { Orders } from "../models/orders.model";

export const checkPromos = async () => {
  try {
    const current = new Date();

    const invalidPromos = await Promo.find({
      $or: [{ start_date: { $gt: current } }, { end_date: { $lt: current } }],
    });

    if (!invalidPromos.length) {
      console.log("✅ No invalid promos found.");
      return;
    }

    for (const promo of invalidPromos) {
      const relatedOrders = await Orders.find({
        "promo._id": promo._id,
        order_status: "Pending",
      });

      if (relatedOrders.length > 0) {
        const result = await Orders.deleteMany({
          "promo._id": promo._id,
          order_status: "Pending",
        });

        const newQuantity = promo.quantity + result.deletedCount;

        await Promo.findByIdAndUpdate(promo._id, {
          $set: { quantity: newQuantity },
        });

        console.log(
          `🗑️ Deleted ${result.deletedCount} pending orders using expired promo "${promo.promo_name}".`
        );
        console.log(
          `♻️ Restocked "${promo.promo_name}" to quantity: ${newQuantity}`
        );
      } else {
        console.log(
          `⚠️ No pending orders found using promo "${promo.promo_name}".`
        );
      }
    }

    console.log("🎯 Promo check and restock completed.");
  } catch (error) {
    console.error("❌ Error during promo cleanup:", error);
  }
};
