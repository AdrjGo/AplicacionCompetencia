import React, { useState } from "react";
import { View, Text } from "react-native-web";
import { SelectList } from "react-native-dropdown-select-list";

function ListaDropDown() {
  const [selected, setSelected] = React.useState("");

  const data = [
    { key: "1", value: "Mobiles", disabled: true },
    { key: "2", value: "Appliances" },
    { key: "3", value: "Cameras" },
    { key: "4", value: "Computers", disabled: true },
    { key: "5", value: "Vegetables" },
    { key: "6", value: "Diary Products" },
    { key: "7", value: "Drinks" },
  ];

  return (
    <View>
      <SelectList
        setSelected={(val) => setSelected(val)}
        data={data}
        save="value"
      />
    </View>
  );
}

export default ListaDropDown;
