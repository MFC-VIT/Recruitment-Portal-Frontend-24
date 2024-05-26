import { useEffect, useLayoutEffect, useState } from "react";
import secureLocalStorage from "react-secure-storage";
interface Task {
  label: string;
  description: string;
  title: string;
  resources?: string[];
}
interface Props {
  selectedSubDomain: string;
  setSelectedSubDomain: React.Dispatch<React.SetStateAction<string>>;
}
const TechTask = ({ selectedSubDomain, setSelectedSubDomain }: Props) => {
  const [filteredTasks, setFilteredTask] = useState<Task[]>([]);
  const [isSC, setIsSC] = useState(false);
  // const [showModal, setShowModal] = useState(false);
  // const [taskState, setTaskState] = useState("");
  useEffect(() => {
    // Based on the sub-domain we are filtering the task
    const filteredTask = techTaskData.filter(
      (task) =>
        task.label === selectedSubDomain &&
        (isSC === true ? task.for === "senior" : task.for === "junior")
    );
    if (filteredTask) {
      setFilteredTask(filteredTask);
    }
  }, [selectedSubDomain, isSC]);

  // useEffect(() => {
  //   const isSenior = secureLocalStorage.getItem("isSC");
  //   setIsSC();
  // }, [isSC]);

  useLayoutEffect(() => {
    const userDetailsstore = secureLocalStorage.getItem(
      "userDetails"
    ) as string;
    if (userDetailsstore) {
      const userDetails = JSON.parse(userDetailsstore);
      setIsSC(userDetails.isSC);
    }
  }, []);
  // console.log(isSC);

  return (
    <div
      className={`w-full h-full overflow-y-scroll -task-container ${
        selectedSubDomain === "" ? "flex items-center" : ""
      }`}
    >
      {selectedSubDomain === "" && (
        <div className="flex justify-center flex-wrap w-full">
          <button
            type="button"
            onClick={() => setSelectedSubDomain("frontend")}
            className="nes-btn nes-btn-task is-error w-[47%] md:w-[22%] aspect-[2] custom-nes-error text-xs"
          >
            Frontend
          </button>
          <button
            type="button"
            onClick={() => setSelectedSubDomain("backend")}
            className="nes-btn is-error nes-btn-task  w-[47%] md:w-[22%] aspect-[2] custom-nes-error text-xs"
          >
            Backend
          </button>
          <button
            type="button"
            onClick={() => setSelectedSubDomain("fullstack")}
            className="nes-btn is-error nes-btn-task  w-[47%] md:w-[22%] aspect-[2] custom-nes-error text-xs"
          >
            Fullstack
          </button>
          <button
            type="button"
            onClick={() => setSelectedSubDomain("app")}
            className="nes-btn is-error  nes-btn-task w-[47%] md:w-[22%] aspect-[2] custom-nes-error text-xs"
          >
            App Dev
          </button>
          <button
            type="button"
            onClick={() => setSelectedSubDomain("ai/ml")}
            className="nes-btn is-error nes-btn-task w-[47%] md:w-[22%] aspect-[2] custom-nes-error text-xs"
          >
            AI/ML
          </button>

          <button
            type="button"
            onClick={() => setSelectedSubDomain("game")}
            className="nes-btn is-error nes-btn-task w-[47%] md:w-[22%] aspect-[2] custom-nes-error text-xs"
          >
            Game Dev
          </button>

          {!isSC && (
            <button
              type="button"
              onClick={() => setSelectedSubDomain("cp")}
              className="nes-btn is-error nes-btn-task w-[47%] md:w-[22%] aspect-[2] custom-nes-error text-xs"
            >
              CP
            </button>
          )}
        </div>
      )}

      {selectedSubDomain !== "" && (
        <div className="w-full mt-8 h-full flex flex-col gap-8 md:gap-4">
          {filteredTasks.map((task, index) => (
            <div
              className="nes-container is-dark with-title  dark-container-nes"
              key={index}
            >
              <p className="title">{task.title}</p>
              <p className="text-xs md:text-sm text-left leading-4 desc-task">
                {task.description}
              </p>
              {task.resources && task.resources.length > 0 && (
                <div className="flex justify-between flex-col md:flex-row">
                  <span className="md:text-sm text-xs">Resources:</span>
                  <span className="flex flex-col md:text-sm text-xs md:flex-row">
                    {task.resources &&
                      task.resources.map((resource, index) => (
                        <a href={resource} target="_blank" key={index}>
                          Resource {index + 1} &nbsp;
                        </a>
                      ))}
                  </span>
                </div>
              )}
              {/* <button
                type="button"
                className="nes-btn is-error  custom-nes-error"
                onClick={() => {
                  setShowModal(true);
                  setTaskState(task.title);
                }}
              >
                Submit Task
              </button> */}
            </div>
          ))}
        </div>
      )}
      {/* {showModal && <Modal task={taskState} setShowModal={setShowModal} />} */}
    </div>
  );
};

export default TechTask;
// function Modal({
//   task,
//   setShowModal,
// }: {
//   task: string;
//   setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
// }) {
//   return (
//     <div
//       className="bg-black p-4 min-w-[40vw] min-h-[30vh] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 nes-container is-dark is-rounded --submit-container"
//       style={{ position: "absolute" }}
//     >
//       <form method="">
//         <p className="title text-xl">Submit Task</p>
//         <input
//           type="text"
//           id="dark_field"
//           className="nes-input is-dark"
//           placeholder="Github Repository Link"
//           name={`${task}-github`}
//           required
//         />
//         <input
//           type="text"
//           id="dark_field"
//           className="nes-input is-dark"
//           placeholder="Demo Link"
//           name={`${task}-demo`}
//         />
//         <menu className="dialog-menu mt-4">
//           <button
//             className="nes-btn"
//             type="button"
//             onClick={() => setShowModal(false)}
//           >
//             Cancel
//           </button>
//           <button className="nes-btn is-error" type="submit" onClick={() => {}}>
//             Submit
//           </button>
//         </menu>
//       </form>
//     </div>
//   );
// }
const techTaskData = [
  {
    label: "ai/ml",
    title: "Simple Mad Libs Game",
    description:
      "Create a basic Mad Libs game where the program asks the user to input various words (e.g., nouns, verbs, adjectives), and then insert those words into a pre-defined story template to generate a funny story.",
    resources: ["https://www.madlibs.com/"],
    for: "junior",
  },
  {
    label: "ai/ml",
    title: "Number Guessing Game",
    description:
      "Create a simple number guessing game where the computer randomly selects a number within a given range (e.g., 1 to 100), and the player has to guess the number. The game should provide feedback on whether the guess is too high, too low, or correct.",
    resources: ["https://codepen.io/touchportyl-ns/pen/powKVGp"],
    for: "junior",
  },
  {
    label: "ai/ml",
    title: "Basic Linear Regression Model",
    description:
      "Implement a simple linear regression model to understand the basics of machine learning. Use a small dataset, such as predicting house prices based on square footage. The goal is to implement the linear regression algorithm from scratch, without using high-level libraries like Scikit-Learn for the model.",
    resources: [
      "https://towardsdatascience.com/introduction-to-machine-learning-algorithms-linear-regression-14c4e325882a",
    ],
    for: "junior",
  },
  {
    label: "ai/ml",
    title: "Basic Data Visualization",
    description:
      "Create a simple data visualization project to understand the basics of handling and visualizing data. Use a small dataset (e.g., Iris dataset) and create visualizations such as scatter plots, bar charts, and histograms to explore the data.",
    resources: ["https://matplotlib.org/stable/index.html"],
    for: "junior",
  },
  {
    label: "ai/ml",
    title: "Task: Develop a basic AI behavior for a simple game scenario",
    description:
      "Description: Your goal is to create an AI-controlled character that demonstrates either chasing a target or avoiding obstacles within the game environment. You can choose to implement this behavior in any programming language or game development framework of your choice.",
    for: "senior",
  },
  {
    label: "app",
    title: "Task: Develop a Simple To-Do List Application",
    description:
      "Description: Create a basic To-Do List application that allows users to add, edit, and delete tasks. This project will introduce you to fundamental concepts of application development and user interface design.",
    resources: ["https://reactjs.org/", "https://vuejs.org/"],
    for: "junior",
  },
  {
    label: "app",
    title: "Task: Develop a Weather App with API Integration",
    description:
      "Description: Create a mobile application that provides users with real-time weather information based on their location. The app should retrieve weather data from a weather API and display it in a user-friendly interface.",

    resources: [
      "https://openweathermap.org/api",
      "https://openweathermap.org/current",
    ],

    for: "junior",
  },

  {
    label: "cp",
    title: "Task: Implement a Simple Sorting Algorithm and Compare Performance",
    description:
      "Description: Create a program that implements a basic sorting algorithm (e.g., Bubble Sort, Selection Sort, Insertion Sort) and compare its performance with other sorting algorithms using time complexity analysis.",
    resources: ["https://docs.python.org/3/", "https://en.cppreference.com/w/"],
    for: "junior",
  },

  {
    label: "cp",
    title:
      "Task: Develop a Basic Library Management System with CRUD Operations",
    description:
      "Description: Build a simple command-line based library management system that allows users to manage books and members using basic CRUD (Create, Read, Update, Delete) operations directly within the application.",
    for: "junior",
  },

  {
    label: "game",
    title: "Task: Develop a Basic Scene Setup with Unity Engine",
    description:
      "Set up a new scene in Unity. Create and customize terrain (e.g., add hills, valleys,rivers). Set up a directional light and position the main camera. Place a few game objects (e.g., a character, trees, rocks,other side characters etc) in the scene. For submission include the unity project files and a video showing the scene(video optional but appreciated if included).",
    for: "junior",
  },

  {
    label: "game",
    title: "Basic UI Implementation in Unity: ",
    description:
      "Add UI elements such as a start menu, health bar, and score display. Write scripts to handle UI interactions (e.g., start game button, updating health and score). Arrange UI elements on the screen. For submission include the unity project files and a video showing the scene(video optional but appreciated if included).",
    for: "junior",
  },

  {
    label: "game",
    title: "Task: Develop a Basic Levels Setup with Unreal Engine",
    description:
      "Description: Model and animate characters using Unreal Engine's animation tools or import pre-made assets. Rig characters for skeletal animation and set up animation blueprints for movement and interactions. Create animations for actions such as walking, running, jumping, and attacking.",
    for: "senior",
  },

  {
    label: "game",
    title: "Task: Develop a Basic Scene Setup with Unity Engine",
    description:
      "Description: Arrange and position game objects within the scene, such as characters, props, and obstacles. Implement player movement mechanics using Unity's built-in physics or character controllers. Allow the player to move horizontally and jump, with appropriate controls and responsiveness.",
    for: "senior",
  },

  {
    label: "app",
    title:
      "Task: Develop a Blog/CMS Application with Social Media Sharing Integration",
    description:
      "Description: Create a web-based Blog/CMS (Content Management System) application that allows users to create, edit, publish, and share articles. Additionally, integrate social media sharing functionality to enable users to share their articles on various platforms.",
    for: "senior",
  },

  {
    label: "ai/ml",
    title:
      "Task: Develop a Facial Expression Recognition System using Deep Learning",
    description:
      "Description:Build a sophisticated machine learning model to recognize facial expressions (e.g., happy, sad, angry, surprised) using deep learning techniques. This project will involve image processing, convolutional neural networks (CNNs), and model deployment for real-time inference.",
    for: "senior",
  },
  {
    label: "backend",
    title: "Task: Devlop a Simple Blog API",
    description:
      "Design a user-friendly blogging platform allowing users to effectively manage their posts. With this app, users can easily browse through all their posts, write new ones, make edits, and delete old ones. You have the freedom to select the backend framework that best suits your needs.",
    for: "junior",
  },

  {
    label: "backend",
    title: "Task: Devlop a Ecommerce API",
    description:
      "Develop a secure Ecommerce platform with user registration, login (including user verification or Google OAuth is bonus ), authentication and product management. Users can view all products, create new listings with image uploads, edit and delete products. Implement a search function with pagination, price sorting, category filtering, and a like product features.",
    for: "senior",
  },

  {
    label: "frontend",
    title: "Task: Kanban Board Clone",
    description:
      "Your task is to create a Kanban board clone that is fully functional, responsive, and features an intuitive user interface. A Kanban board is a project management tool that visually represents work at various stages of a process using cards and columns. Each column represents a stage of the workflow, and cards within each column represent tasks or items to be completed. The primary objective of a Kanban board is to provide visibility into the progress of work and help teams manage their tasks efficiently.",
    for: "senior",
    resources: ["https://webix.com/demos/kanban/"],
  },
  {
    label: "frontend",
    title: "Task: Replicate the UI",
    description:
      "Your task is to create a replica of the following authentication page as closely as possible. You can use any front-end technology of your choice, such as HTML, CSS, JavaScript, React, Angular, Vue, etc. The page should be responsive and visually identical to the design provided in the Dribbble shot. You can use placeholder text for the form fields and buttons, but the overall layout, colors, and styles should match the design. Try to implement the theme change functionality as well.",
    for: "junior",
    resources: [
      "https://cdn.dribbble.com/users/6816261/screenshots/16024513/media/dfe89b08449994c393095876f4f40d40.mp4",
    ],
  },
  {
    label: "fullstack",
    title: "Form Submission and Admin Panel",
    description:
      "Try to create a replica of the following contact page design as closely as possible. You can use any front-end technology of your choice, such as HTML, CSS, JavaScript, React, Angular, Vue, etc. The page should be responsive and visually identical to the design provided in the Dribbble shot. After submission of the form, the data must be saved to a database of your choice, you can create backend for this project using any framework or technology of your choice. In addition to this, create a seperate page for the admin, where the admin can view all the contact form submissions.",
    for: "junior",
    resources: [
      "https://dribbble.com/shots/18739948-Contact-us-UI-design/attachments/13926326?mode=media",
    ],
  },
  {
    label: "fullstack",
    title: "Fullstack Blog Application Task",
    description:
      "You are tasked with building a full-stack social media platform where users can create profiles, connect with friends, share posts, comment on posts, like posts, and send messages. The application should have a clean and intuitive user interface and should prioritize user experience and scalability.",
    for: "senior",
  },
];
