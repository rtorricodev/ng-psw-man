- Demo: [video]: https://www.loom.com/share/d8d0be7fc3744a6fa97c7a8b30e952a2


# UI:

- Angular version: 14
- Used RXJS to manage Observables
- Created small components in order to be reusable (passwordManagerCard - ConfirmationDialog)
-  We have Core/Shared folders with modules based in the Angular Style guide
- I have used tailwind for styles
- Added Docker to be deployed in any cloud services
- I have used Prettier locally for identation
- The application was splited in modules in order to use lazy loading


# BE:

- Node: 16.14.0
- TypeScript: 4.8.4
- Express: 4.18.1
- Separted folders:
    - Controllers for logic
    - Routers for defining api roiutes
    - Server to abstract the logic of express
- Used Typescript to define interfaces
- Used Prettier locally for identation
- Added Docker for easy deploy in cloud services


# Test Cases:

## Add Password Card:
    - Click Add New Password
    - Type name as "Facebook" Required
    - Type URL as "http://www.facebook.com" 
    - Type Username as "jhondoe"
    - Type Password 
    - Click Confirm button
    - Button right to the password field should hide/unhide password field
    - Button right to the hide button should copy the password
        - You should be able to paste the password wherever you need it
    - Password card should be displayed at the end of the list

## Delete Password Card:
    - Click Delete inside Card
    - Click Confirm in Dialog 
    - Password card should be removed of the list

## Edit Password Card:
    - Click Edit Button inside Password Card
    - Change Name by "Google"
    - Click Confirm button
    - Password Card should be shown with new name

## Search Password Card:
    - Card with Facebook as name should be previously created
    - Type "Facebook" in the search field
    - I should only show onw password card with name as "Facebook"

       
