const AppState = {

    currentOutreach: null,

    currentHousehold: null,

    currentChild: null,

    currentScreening: null,

    load(){

        this.currentOutreach = Storage.get("currentOutreach");

        this.currentHousehold = Storage.get("currentHousehold");

        this.currentChild = Storage.get("currentChild");

        this.currentScreening = Storage.get("currentScreening");

    },

    save(){

        Storage.save("currentOutreach",this.currentOutreach);

        Storage.save("currentHousehold",this.currentHousehold);

        Storage.save("currentChild",this.currentChild);

        Storage.save("currentScreening",this.currentScreening);

    }

};
