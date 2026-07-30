const NutritionEngine = {

    classify(muac, edema) {

        muac = Number(muac);

        if (isNaN(muac) || muac < 80 || muac > 300) {
            throw new Error("MUAC must be between 80 mm and 300 mm.");
        }

        if (edema === true) {

            return {
                status: "SAM",
                color: "danger",
                advice: "Immediate referral required."
            };

        }

        if (muac < 115) {

            return {
                status: "SAM",
                color: "danger",
                advice: "Immediate referral required."
            };

        }

        if (muac < 125) {

            return {
                status: "MAM",
                color: "warning",
                advice: "Provide nutrition counselling and schedule follow-up."
            };

        }

        return {

            status: "NORMAL",

            color: "success",

            advice: "Continue routine nutrition counselling."

        };

    }

};
