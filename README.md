# startup-page

Inspired by [r/unixporn](https://www.reddit.com/r/unixporn/) posts I created my own Home page for browsers.

## usage

1. Clone the repo 
```bash
   git clone https://github.com/Besufikad17/startup-page.git & cd startup-page
```
2. Install packages
```bash
   npm install
```
3. Add cutom theme (optional)
- You can add custom theme using the following format in `themes.ts` file which is located in `lib\src\constants` folder.
```ts
   // creating theme instance    
   export ThemeName: Theme = {
    name: "theme name",
    mode: "light or dark",
    bg: "hex value of background color",
    fg: "hex value of text color",
    colors: ["list of hex values of colors u want to use for article tags"]
   }
   
   // adding the theme instance to map of themes with  
   themeMap.set("themeName-mode", ThemeName);
```

4. Add/Remove sites (optional)
- You can add/remove sites by editing `sites.ts` file which is located in `lib\src\constants` folder. To remove site or category u can delete the corresponding `SiteModel` or `CategoryModel` object from `categories` list.
    - To add new site get the icon from [iconify](https://icon-sets.iconify.design/) and use the follwing format:
    ```ts
       export const categories: CategoryModel[] = [
            ...,
            new CategoryModel(
                "category name"
                [ 
                    ...,
                    new SiteModel("icon name", "site url")      // adding new SiteModel instance to categrories list
                ]
            )
       ];
    ```
    - To add new category t
    ```ts
        export const categories: CategoryModel[] = [
            ...,
            new CategoryModel(                                  // adding new CategoryModel instance to categrories list
                "category name"
                [ 
                    ...                                         // list of sites in form of SiteModel insance
                ]
            )
       ];
    ```
5. Deploying 
- You can deploy the project in free hosting platforms like [vercel](https://vercel.com/) or [netlify](https://www.netlify.com/) or by running it locally using `npm run dev`.

6. Setting as home page in browsers.
- Chrome
- Firefox

**Note**
- If you ran into any issues while configuring it feel free to submit issue or contact me.


    