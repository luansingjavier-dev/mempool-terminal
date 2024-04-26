# 🪙 Mempool Terminal

This project is a website built using React.js, a popular JavaScript library for building user interfaces. It provides a terminal-like interface for exploring Bitcoin wallet data.

## ⚙️ Tech Stack

- [Vite](https://vitejs.dev/)
- [React.js](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

## 🤸 Quick Start

**Prerequisites**

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/luansingjavier/mempool.git
cd mempool
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the project.

## 🚀 Table of Contents

- Folder Structure
- Editing Content
- Customization

### Folder Structure

- **public**: Contains static files like images and executable files, such as the `meempol.exe` file.
- **src**: src: Contains the source code of the project.
  - **assets**: Holds images and SVG files used in the project.
  - **components**: Contains React components used to build the UI.
  - **constant**: Contains JavaScript files storing data and configurations.
  - **tailwind.config.js**: Configuration file for Tailwind CSS, a utility-first CSS framework.

### Editing Content

You can edit the text and replace images in the following files:

**constants/index.js**:
Update text content for navigation, mempool entries, and information cards.

**constants/images.js**:
Replace images with your desired images. Make sure to place new images in the correct folder within the assets directory.

### Adding or Removing Sections

To add or remove sections from the website:

- Navigate to the **src/components** directory.

- Each React component file represents a section of the website. You can add or remove sections by editing these files.

### Customization

**Changing the Logo**

To change the logo of the website:

- Place your logo file in the src/assets/images directory.
- Import your logo in the src/constants/images.js file. Add an import statement similar to this:

```bash
import YourLogo from "../assets/images/your-logo.png";
```

_Make sure to replace "your-logo.png" with the actual filename of your logo._

- In the src/components/Header.jsx file, locate line 27, which should contain:

```bash
<img src={mempool} width={150} height={40} alt="Mempool-Terminal" />
```

- Replace mempool with the imported variable representing your logo. For example:

```bash
<img src={YourLogo} width={150} height={40} alt="Your Logo" />
```

_Replace "Your Logo" with an appropriate alt text for your logo._

**Changing the GitHub Logo and Link**

- Follow the steps mentioned in the "Changing the Logo" section to replace the GitHub logo file in the src/assets/images directory and import it into the src/constants/images.js file.
- Update the GitHub logo and link in the src/constants/index.js file:
  - Locate the navigation array.
  - Find the object where the title is "Meet the Team".
  - Update the logo property with the imported variable representing your GitHub logo.
  - Modify the url property with the URL of your GitHub repository.

```bash
    import GitHubLogo from "../assets/images/github-logo.png";

    export const navigation = [
    {
        id: "0",
        title: "Meet the Team",
        url: "https://github.com/your-username/your-repository",
        logo: GitHubLogo,
    },
];
```

**Changing Data in the First Terminal Box**

- Locate the mempool array in the src/constants/index.js file.
- Find the first object in the array.
- Update the following properties:
  - **title**: Change this to the desired title for the terminal box.
  - **text**: Update the description or text content for the terminal box.
  - **download**: Set this to false if you don't want to show the download button, or true otherwise.
  - **imageUrl1**: Replace this with the filename or path of your desired image for the first image in the box.
  - **imageUrl2**: Replace this with the filename or path of your desired image for the second image in the box (if applicable).
  - **logo**: Replace this with the filename or path of your desired logo for the terminal box.

```bash
export const mempool = [
  {
    id: "0",
    title: "Your New Title",
    text: "Your updated description goes here.",
    download: false, // Set to true or false based on your preference
    imageUrl1: "your-image1.png",
    imageUrl2: "your-image2.png", // If applicable
    logo: "your-logo.png",
  },
  // More objects if present...
];
```

**Changing Data in the Second Terminal Box**

- Locate the mempool array in the src/constants/index.js file.
- Find the second/last object in the array.
- Update the following properties:
  - **title**: Change this to the desired title for the terminal box.
  - Add a **text** value and provide the description or text content for the terminal box.
  - **download**: Set this to true if you want to show the download button, or false otherwise.
  - **imageUrl1**: Replace this with the filename or path of your desired image for the box.

```bash
export const mempool = [
  // Previous objects...
  {
    id: "1",
    title: "Your Second Title",
    text: "Your updated description for the second terminal box.",
    download: true, // Set to true or false based on your preference
    imageUrl1: "your-second-image.png",
  },
];
```

**Changing Data in the Second Terminal Box**

- Locate the info array in the src/constants/index.js file.
- Update or add entries in the array to modify the details of each information item.
- For each object in the array, update the following properties:
  - **title**: Change this to the desired title for the information item.
  - **content**: Update the content or description for the information item.

```bash
export const info = [
  {
    id: "1",
    title: "New Title 1",
    content: "Updated content for information item 1.",
  },
  {
    id: "2",
    title: "New Title 2",
    content: "Updated content for information item 2.",
  },
  // Add or update more objects as needed...
];
```

- If you want to change the title of the information section itself, locate the src/components/Information.jsx file.
- On line 12, you can modify the title of the section. Additionally, on line 9, you can change the description of the section if needed.For example:

```bash
<p className="text-center body mb-[1rem] text-n-3 hover: transition duration-300 transform hover:translate-y-[-4px]">
  Your updated description for the information section.
</p>
```

### Saving Changes and Pushing to Git Repository

After you have finished editing the website, follow these steps to save your changes and push them to the Git repository:

- **Save and Close Files**: Ensure all your changes are saved in the files you have edited.

- **Open Terminal**: Open the terminal or command prompt on your computer.

- **Git Pull**: Before pushing your changes, it's a good practice to pull any changes from the remote repository to ensure you have the latest updates.
  Type the following command:

```bash
git pull
```

This command fetches the latest changes from the remote repository and merges them into your local repository.

- **Git Add**: Next, you need to stage your changes for commit.
  Type the following command:

```bash
git add.
```

This command adds all the modified files in your working directory to the staging area.

- **Git Commit**: After adding your changes, you need to commit them with a descriptive message.
  Use the following command:

```bash
git commit -m "feat: Add new feature for meempol"
```

Here's the breakdown of the commit message:

- _feat_: Indicates that this commit introduces a new feature.
- Add new feature for XYZ: A short, descriptive message summarizing the new feature or functionality added in this commit.

You can use different prefixes for different types of changes:

- _feat_: New features or enhancements.
- _fix_: Bug fixes.
- _style_: Changes to code styling or formatting.
- _docs_: Documentation updates.
- _chore_: Maintenance or housekeeping tasks.
- _refactor_: Code refactoring or restructuring.
- _test_: Adding or modifying tests.
  Choose the appropriate prefix based on the nature of your changes.

- **Git Push**: Finally, you need to push your committed changes to the remote repository.
  Type the following command:

```bash
git push
```

This command uploads your local commits to the remote repository, making your changes available to others and updating the project's history.

By following these steps and using descriptive commit messages with appropriate prefixes, you can effectively manage and document your contributions to the project.

Remember to review your changes before pushing them and ensure they align with the project's guidelines and requirements.
