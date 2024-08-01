import React, { useContext, useState } from "react";
import { InwardContext } from "../../context/InwardContext";
import { PartProvider } from "../../context/PartContext";
import apiInstance from "../../services/api";
import PutAwayForm from "./PutAwayForm";
  
  const Putaway = () => {
    const [selectedPart, setSelectedPart] = useState("");
    const [selectedLocation, setSelectedLocation] = useState("");
    const [quantity, setQuantity] = useState("");
    const [error, setError] = useState(null);
    const { inwardItems } = useContext(InwardContext);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const inwardItem = inwardItems.find((item) => item.part === selectedPart);
      if (inwardItem && inwardItem.quantity >= quantity) {
        try {
          const response = await apiInstance.post("putaway", {
            part: selectedPart,
            location: selectedLocation,
            quantity: parseInt(quantity, 10),
          });
          console.log(response.data);
          // Optionally update state or context here
          setSelectedPart("");
          setSelectedLocation("");
          setQuantity("");
          setError(null);
        } catch (error) {
          setError(
            error.response
              ? error.response.data.message
              : "Error putting away part"
          );
        }
      } else {
        alert("Insufficient quantity in inward items");
      }
    };
  
    return (
      <PartProvider>
        <PutAwayForm/>
      </PartProvider>
    );
  };
  
  export default Putaway;
  