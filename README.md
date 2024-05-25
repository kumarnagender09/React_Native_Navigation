# Multi-View Application Assessment

## Overview

For this assessment, you will be creating a multi-view application with three layers of views, designed to display and modify data stored in a plist file. The application will allow users to navigate through states, their corresponding zip codes, and modify zip codes.

## Features

1. **First/Main View**:
    - Displays a list of all states from the plist.
    - Allows users to select a state and navigate to the second view to see its zip codes.

2. **Second View**:
    - Displays a list of zip codes for the selected state.
    - Allows users to select a zip code and navigate to the third view to modify it.

3. **Third View**:
    - Shows the selected zip code and includes a text field for modification.
    - Saves the modified zip code and updates the zip codes list in the second view.

## Project Structure

The project contains the following components:

- **Model**:
  - `State`: Represents a state with its name and associated zip codes.
  - `ZipCode`: Represents a zip code.
  - `DataManager`: Manages reading and writing data from/to the plist.

- **Views**:
  - `MainViewController`: Displays the list of states.
  - `ZipCodesViewController`: Displays the list of zip codes for the selected state.
  - `ModifyZipCodeViewController`: Allows modifying the selected zip code.

- **Plist**:
  - Contains the data for states and their zip codes.

## Instructions

### Step 1: Main View (States List)

1. Load the list of states from the plist file.
2. Populate a table view with the states.
3. When a state is selected, navigate to the second view, passing the selected state.

### Step 2: Second View (Zip Codes List)

1. Load the zip codes for the selected state.
2. Populate a table view with the zip codes.
3. When a zip code is selected, navigate to the third view, passing the selected zip code.

### Step 3: Third View (Modify Zip Code)

1. Display the selected zip code in a text field.
2. Allow the user to modify the zip code.
3. Save the modified zip code back to the plist.
4. Ensure the updated zip code is reflected in the second view's table view.

### Data Passing and Persistence

- Use delegation or closure callbacks to pass data between views.
- Ensure that changes are saved to the plist file and reloaded appropriately.

## Example Plist Structure

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>States</key>
    <array>
        <dict>
            <key>Name</key>
            <string>California</string>
            <key>ZipCodes</key>
            <array>
                <string>90001</string>
                <string>90002</string>
            </array>
        </dict>
        <dict>
            <key>Name</key>
            <string>New York</string>
            <key>ZipCodes</key>
            <array>
                <string>10001</string>
                <string>10002</string>
            </array>
        </dict>
        <!-- Add more states and zip codes as needed -->
    </array>
</dict>
</plist>
```

## Additional Notes

- Ensure your code is well-commented and follows best practices for readability and maintainability.
- Handle edge cases such as empty zip codes or invalid inputs gracefully.
- Provide a simple and intuitive user interface.

## Conclusion

This assessment requires you to create a well-structured, multi-view application that demonstrates your ability to manage data, navigate between views, and update persistent storage. Good luck!