import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import "./SortingRadio.css"


export default function SortingRadio({ images, setImages }) {
    function sortAsc(images) {
        const _images = [...images];
        _images.sort((a, b) => {
          if (a.date > b.date) return 1;
          else if (a.date === b.date) return 0;
          else return -1;
        })
        setImages(_images);
      }
    
      function sortDesc(images) {
        const _images = [...images];
        _images.sort((a, b) => {
          if (a.date > b.date) return -1;
          else if (a.date === b.date) return 0;
          else return 1;
        })
        setImages(_images);
      }
    
    return (
        <div className="SortingRadio">
            <FormLabel component="legend" >Date</FormLabel>
            <RadioGroup aria-label="date" name="sortingDate">
                <FormControlLabel
                value="Ascending"
                control={<Radio />}
                label="Ascending"
                onClick={() => sortAsc(images)}
                />
                <FormControlLabel
                value="Decending"
                control={<Radio />}
                label="Decending"
                onClick={() => sortDesc(images)}
                />
            </RadioGroup>
        </div>
    )
}
