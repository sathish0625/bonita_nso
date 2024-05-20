function ($scope, $http) {
    var white = 'white';
    $scope.backgroudColor = white;

    this.toggleBackgroundColor = function() {
        if ($scope.backgroudColor === white) {
            $scope.backgroudColor = $scope.properties.background;
        } else {
            $scope.backgroudColor = white;
        }
    };

    // Function to handle button click
    this.buttonClick = function() {
        console.log("Button clicked");
        // Implement your functionality here
    };

    // Function to handle save button click
    this.save = function() {
        console.log("Save button clicked");
        // Implement save functionality here
    };

    // Initialize select options
    if (!$scope.properties.options) {
        $scope.properties.options = [
            { label: 'Option 1', value: 'option1' },
            { label: 'Option 2', value: 'option2' },
            { label: 'Option 3', value: 'option3' }
        ];
    }

    // Initialize checklist items
    if (!$scope.properties.checklist) {
        $scope.properties.checklist = [
            { label: 'Item 1', checked: false },
            { label: 'Item 2', checked: false },
            { label: 'Item 3', checked: false }
        ];
    }

    // Example of making an HTTP request
    this.loadData = function() {
        $http.get('https://api.example.com/data')
            .then(function(response) {
                $scope.properties.tableData = response.data;
            }, function(error) {
                console.error('Error fetching data:', error);
            });
    };

    // Initialize table data
    if (!$scope.properties.tableHeaders) {
        $scope.properties.tableHeaders = ['Column 1', 'Column 2', 'Column 3'];
    }

    if (!$scope.properties.tableData) {
        $scope.properties.tableData = [
            ['Row 1 Cell 1', 'Row 1 Cell 2', 'Row 1 Cell 3'],
            ['Row 2 Cell 1', 'Row 2 Cell 2', 'Row 2 Cell 3']
        ];
    }

    // Example datatable initialization (if you have a datatable directive)
    if (!$scope.properties.datatableHeaders) {
        $scope.properties.datatableHeaders = ['Header 1', 'Header 2', 'Header 3'];
    }

    if (!$scope.properties.datatableData) {
        $scope.properties.datatableData = [
            ['Data 1', 'Data 2', 'Data 3'],
            ['Data 4', 'Data 5', 'Data 6']
        ];
    }
}
