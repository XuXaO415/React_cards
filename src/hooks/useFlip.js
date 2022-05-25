import { useState, useEffect } from "react";

const useFlip = (initialValue = true) => {
    const [isFlipped, setIsFlipped] = useState(initialValue);

    const flip = () => {
        setIsFlipped((flipCard) => !flipCard);
    };
    return [isFlipped, flip];
};

export default useFlip;