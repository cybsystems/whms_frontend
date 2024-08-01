// components/PicklistForm.js
import { Remove as RemoveIcon } from '@mui/icons-material';
import { FormControl, Grid, IconButton, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React, { useState } from 'react';
import apiInstance from '../services/api';

const PickListRow=(props)=>{
    const {part={},onUpdatePartRow,availableParts=[],onRemovePart}=props;
    const [availableLocations, setAvailableLocations] = useState([]);
     
    const handlePartChange = async (event) => {
        const { name, value } = event.target;
        const updatedPart={...part,[name]:value}
        onUpdatePartRow(updatedPart)
        if(name==="part"){
          const locationsResponse= await apiInstance.get(`putaway/${value}`)
          setAvailableLocations(locationsResponse.data)  
        }
        
      };

    return (
        <React.Fragment key={part.partNumber}>
              <Grid item xs={3}>
                <FormControl fullWidth>
                  <InputLabel>Part</InputLabel>
                  <Select
                    label="Part"
                    name="part"
                    value={part.part || ''}
                    onChange={(e) => handlePartChange(e)}
                    required
                  >
                    {availableParts.length > 0 ? (
                      availableParts.map((p) => (
                        <MenuItem key={p.partNumber} value={p.partNumber}>
                          {p.partNumber}
                        </MenuItem>
                      ))
                    ) : (
                      <MenuItem value="">No parts available</MenuItem>
                    )}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={3}>
                <FormControl fullWidth>
                  <InputLabel>Location</InputLabel>
                  <Select
                    disabled={availableLocations.length===0}
                    label="Location"
                    name="location"
                    value={part.location || ''}
                    onChange={(e) => handlePartChange(e)}
                    required
                  >
                    {availableLocations.length > 0 ? (
                      availableLocations.map((loc) => (
                        <MenuItem key={loc.locationName} value={loc.locationName}>
                          {loc.locationName}
                        </MenuItem>
                      ))
                    ) : (
                      <MenuItem value="">No locations available</MenuItem>
                    )}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={3}>
                <TextField
                  label="Quantity"
                  name="quantity"
                  type="number"
                  value={part.quantity.toString()}
                  onChange={(e) => handlePartChange({...e,target:{...e.target,value:parseInt(e.target.value),name:"quantity" }})}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={3}>
                <IconButton onClick={onRemovePart}>
                  <RemoveIcon />
                </IconButton>
              </Grid>
            </React.Fragment>
    )
}


export default PickListRow;