import { useState } from "react";
import axios from "axios";
import { v4 as uuid } from "uuid";



const useFlip = (initialValue = true) => {
    const [isFlipped, setIsFlipped] = useState(initialValue);
    const flipCard = () => {
        setIsFlipped(flipCard => !flipCard);
    };
    return [isFlipped, flipCard];
};

function useAxios(url) {
    const [response, setResponse] = useState([]);
    const fetchResponse = async() => {
        const res = await axios.get(url)
        setResponse(response => [...response, {...res.data, id: uuid() }]);
        console.log("res.data;", res.data);
    }
    return [response, fetchResponse]
}

export { useFlip, useAxios };