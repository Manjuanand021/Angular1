function FilterService() {
    var name = 'Manjuanand';
    return {
        getAbusiveWords: function () {
            return [
                "Hell",
                "Screw",
                "Bloody",
                "Shit",
                "Damn"
            ];;
        }
    }
}

export default FilterService;