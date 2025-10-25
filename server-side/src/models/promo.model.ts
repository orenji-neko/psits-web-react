import mongoose, { Schema, Document, Types } from "mongoose";
import {
  IPromo,
  ISelectMerchandise,
  ISelectedSpecificStudent,
  IItemsAvail,
  ISelectedAudience,
} from "./promo.interface";

export interface IPromoDocument extends IPromo, Document {}

const ItemsAvailSchema = new Schema<IItemsAvail>({
  _id: {
    type: Schema.Types.ObjectId,
    ref: "Merch",
    required: true,
  },
  id_number: {
    type: String,
    ref: "Student",
    required: true,
  },
  promo_used: {
    type: Date,
    default: new Date(),
  },
});

const SelectMerchandiseSchema = new Schema<ISelectMerchandise>(
  {
    _id: {
      type: Schema.Types.ObjectId,
      ref: "Merch",
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    items: {
      type: [ItemsAvailSchema],
    },
  },
  { _id: false }
);

const SelectSpecificStudentSchema = new Schema<ISelectedSpecificStudent>({
  id_number: {
    type: String,
    ref: "Student",
  },
});

const SelectAudienceSchema = new Schema<ISelectedAudience>({
  role: {
    type: String,
  },
});

const promoSchema = new Schema<IPromoDocument>({
  promo_name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  limit_type: {
    type: String,
    required: true,
  },
  selected_audience: {
    type: [String],
  },
  selected_specific_students: {
    type: [String],
  },
  discount: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
  },
  start_date: {
    type: Date,
    required: true,
  },
  end_date: {
    type: Date,
    required: true,
  },
  selected_merchandise: {
    type: [SelectMerchandiseSchema],
  },
  status: {
    type: String,
    default: "Active",
  },
});

export const Promo = mongoose.model<IPromoDocument>("Promo", promoSchema);
