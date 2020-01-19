import {useState} from 'react';
const useToggleState = (initialValue = false) => {
    
    const [state, setState] = useState(initialValue);
    const toggle = () => {
        console.log("toggle called");
        console.log(state);
        setState(!state);
    }

    return [state, toggle];
}

export default useToggleState;