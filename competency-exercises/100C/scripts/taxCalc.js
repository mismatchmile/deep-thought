function bracket() {
    let income = 250000;

    if (income < 48535) {
        let tax = (income * 0.15);
        let result = (income + tax);
        result = result.toFixed(2);
        return (result);
    } else if (income > 48535 && income < 97069) {
        let delta = (48535 * 0.15);
        let delta2 = ((income - 48535) * 0.205);
        let result = (income + delta + delta2);
        result = result.toFixed(2);
        return (result);
    } else if (income > 48535 && income < 150473) {
        let delta = (48535 * 0.15);
        let delta2 = ((97069 - 48535) * 0.205);
        let delta3 = ((income - 97069) * 0.26);
        let result = (income + delta + delta2 + delta3);
        result = result.toFixed(2);
        return (result);
    } else if (income > 48535 && income < 214368) {
        let delta = (48535 * 0.15);
        let delta2 = ((97069 - 48535) * 0.205);
        let delta3 = ((150473 - 97069) * 0.26);
        let delta4 = ((income - 150473) * 0.29);
        let result = (income + delta + delta2 + delta3 + delta4);
        result = result.toFixed(2);
        return (result);
    } else if (income > 214368) {
        let delta = (48535 * 0.15);
        let delta2 = ((97069 - 48535) * 0.205);
        let delta3 = ((150473 - 97069) * 0.26);
        let delta4 = ((214368 - 150473) * 0.29);
        let delta5 = ((income - 214368) * 0.33);
        let result = (income + delta + delta2 + delta3 + delta4 + delta5);
        result = result.toFixed(2);
        return (result);
    }
}

export {
    bracket
};