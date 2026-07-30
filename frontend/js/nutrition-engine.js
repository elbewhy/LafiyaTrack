/**
 * LafiyaTrack Nutrition Engine
 * MVP Version 0.1
 */

function classifyNutrition(muac, edema) {

    muac = Number(muac);

    if (edema === true) {

        return {

            status: "SAM",

            color: "danger",

            message: "Bilateral pitting edema detected."

        };

    }

    if (muac < 115) {

        return {

            status: "SAM",

            color: "danger",

            message: "Severe Acute Malnutrition."

        };

    }

    if (muac >= 115 && muac < 125) {

        return {

            status: "MAM",

            color: "warning",

            message: "Moderate Acute Malnutrition."

        };

    }

    return {

        status: "NORMAL",

        color: "success",

        message: "Child is within normal MUAC range."

    };

}
