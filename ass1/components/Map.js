import React from "react";
import {
  Text,
  View,
  TouchableNativeFeedback,
  TextInput,
  Image,
  PermissionsAndroid,
  StyleSheet,
  ActivityIndicator,
  ToastAndroid
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import Geocoder from "react-native-geocoding";
import { debounce } from "throttle-debounce";
Geocoder.init(AIzaSyBQdzk1X4JOERWsprMNgcNBiVezIzI8Z0U);