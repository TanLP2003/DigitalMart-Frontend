import { createSlice } from "@reduxjs/toolkit";

import axios from "axios";

const initialState = {
  firstname: "",
  lastname: "",
  email: "",
  address: "",
  city: "",
  district: "",
  wards: "",
  phone: "",
};

