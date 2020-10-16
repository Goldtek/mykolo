import { v1 } from "uuid";
import { ActionSheet } from "native-base";
import { Linking } from "react-native";
import Config from "react-native-config";
import _ from "underscore";



export function uuid(): string {
  const id = v1();

  // flip the fields for time ordering
  return id.replace(/^(.{8})-(.{4})-(.{4})/, "$3-$2-$1");
}

export const toTitleCase = (str) => {
  if (str && str.length > 0) {
    return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
  }
};

export const capitalize = (str) => {
  if (str && str.length > 0) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }
  return "";
};

export const validateEmail = email =>
  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email);
