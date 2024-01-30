
export const dummyCourses = [
  {
    id: 1,
    name: 'Introduction to React',
    instructor: 'John Doe',
    enrollmentStatus: 'Open',
    duration: '6 weeks',
    schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
    location: 'Online',
    prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
    imageUrl:"",
    syllabus: [
      {
        week: 1,
        topic: 'Introduction to React Native',
        content: 'Overview of React Native, setting up your development environment.',
      },
    ],
  },
  {
    id: 2,
    name: 'Node.js Basics',
    instructor: 'Jane Smith',
    enrollmentStatus: 'Open',
    duration: '8 weeks',
    schedule: 'Mondays and Wednesdays, 7:00 PM - 9:00 PM',
    location: 'Online',
    prerequisites: ['Basic JavaScript knowledge'],
    imageUrl:"",
    syllabus: [
      {
        week: 1,
        topic: 'Introduction to Node.js',
        content: 'Overview of Node.js, installing Node.js and npm.',
      },
    ],
  },
  {
    "id": 3,
    "name": "Advanced JavaScript",
    "instructor": "Emily Johnson",
    "enrollmentStatus": "Open",
    "duration": "10 weeks",
    "schedule": "Wednesdays and Fridays, 5:30 PM - 7:30 PM",
    "location": "Online",
    "prerequisites": ["Intermediate JavaScript knowledge"],
    imageUrl:"",
    "syllabus": [
      {
        "week": 1,
        "topic": "ES6 Features",
        "content": "Introduction to ES6 features like arrow functions, template literals, and destructuring."
      }
    ]
  },
  {
    "id": 4,
    "name": "Python for Data Science",
    "instructor": "Michael Anderson",
    "enrollmentStatus": "Open",
    "duration": "12 weeks",
    "schedule": "Tuesdays and Thursdays, 7:30 PM - 9:30 PM",
    "location": "Online",
    "prerequisites": ["Basic Python knowledge"],
    imageUrl:"",
    "syllabus": [
      {
        "week": 1,
        "topic": "Introduction to Data Science",
        "content": "Overview of data science, basics of data analysis, and Python libraries for data science."
      }
    ]
  },
  {
    "id": 5,
    "name": "Web Design Fundamentals",
    "instructor": "Sophia Lee",
    "enrollmentStatus": "Open",
    "duration": "8 weeks",
    "schedule": "Mondays and Wednesdays, 6:00 PM - 8:00 PM",
    "location": "Online",
    "prerequisites": ["Basic HTML and CSS knowledge"],
    imageUrl:"",
    "syllabus": [
      {
        "week": 1,
        "topic": "HTML5 and CSS3",
        "content": "Introduction to the latest features in HTML and CSS."
      }
    ]
  },
  {
    "id": 6,
    "name": "Java Programming Basics",
    "instructor": "Christopher Davis",
    "enrollmentStatus": "Open",
    "duration": "10 weeks",
    "schedule": "Thursdays, 6:30 PM - 8:30 PM",
    "location": "Online",
    "prerequisites": ["No prior programming knowledge required"],
    imageUrl:"",
    "syllabus": [
      {
        "week": 1,
        "topic": "Introduction to Java",
        "content": "Overview of Java programming language, setting up the development environment."
      }
    ]
  },
  {
    "id": 7,
    "name": "Data Structures and Algorithms",
    "instructor": "Daniel Carter",
    "enrollmentStatus": "Open",
    "duration": "12 weeks",
    "schedule": "Tuesdays and Fridays, 6:30 PM - 8:30 PM",
    "location": "Online",
    "prerequisites": ["Intermediate programming knowledge"],
    imageUrl:"",
    "syllabus": [
      {
        "week": 1,
        "topic": "Arrays and Linked Lists",
        "content": "Introduction to basic data structures like arrays and linked lists."
      }
    ]
  },
  {
    "id": 8,
    "name": "Mobile App Development with Flutter",
    "instructor": "Ryan Mitchell",
    "enrollmentStatus": "Open",
    "duration": "10 weeks",
    "schedule": "Mondays and Thursdays, 6:30 PM - 8:30 PM",
    "location": "Online",
    "prerequisites": ["Basic Dart programming knowledge"],
    imageUrl:"",
    "syllabus": [
      {
        "week": 1,
        "topic": "Introduction to Flutter",
        "content": "Overview of Flutter framework, building the first Flutter app."
      }
    ]
  },
  {
    "id": 9,
    "name": "Machine Learning Fundamentals",
    "instructor": "Alicia Rodriguez",
    "enrollmentStatus": "Open",
    "duration": "14 weeks",
    "schedule": "Wednesdays and Fridays, 7:00 PM - 9:00 PM",
    "location": "Online",
    "prerequisites": ["Basic Python and statistics knowledge"],
    imageUrl:"",
    "syllabus": [
      {
        "week": 1,
        "topic": "Introduction to Machine Learning",
        "content": "Overview of machine learning, supervised and unsupervised learning."
      }
    ]
  },
  {
    "id": 10,
    "name": "Cybersecurity Essentials",
    "instructor": "Alex Turner",
    "enrollmentStatus": "Open",
    "duration": "8 weeks",
    "schedule": "Tuesdays and Thursdays, 7:30 PM - 9:30 PM",
    "location": "Online",
    "prerequisites": ["Basic networking knowledge"],
    imageUrl:"",
    "syllabus": [
      {
        "week": 1,
        "topic": "Introduction to Cybersecurity",
        "content": "Overview of cybersecurity, common threats, and basic security measures."
      }
    ]
  },
  {
    "id": 11,
    "name": "React.js Advanced Concepts",
    "instructor": "David Thompson",
    "enrollmentStatus": "Open",
    "duration": "10 weeks",
    "schedule": "Mondays and Wednesdays, 6:30 PM - 8:30 PM",
    "location": "Online",
    "prerequisites": ["Intermediate React.js knowledge"],
    imageUrl:"",
    "syllabus": [
      {
        "week": 1,
        "topic": "React Hooks and Context",
        "content": "Advanced state management using hooks and context in React.js."
      }
    ]
  },
  {
    "id": 12,
    "name": "Artificial Intelligence Ethics",
    "instructor": "Elena Martinez",
    "enrollmentStatus": "Open",
    "duration": "8 weeks",
    "schedule": "Thursdays, 7:00 PM - 9:00 PM",
    "location": "Online",
    "prerequisites": ["Basic understanding of AI concepts"],
    imageUrl:"",
    "syllabus": [
      {
        "week": 1,
        "topic": "Ethical Considerations in AI",
        "content": "Exploring ethical issues in artificial intelligence, responsible AI development."
      }
    ]
  }
                    
];

// Dummy data for enrolled courses
export const dummyEnrolledCourses = 
  [
    {
      "id": 1,
      "name": "Introduction to React",
      "instructor": "John Doe",
      "thumbnail": "react_thumbnail.jpg",
      "dueDate": "2024-03-15",
      "progress": 50,
      "completed": false
    },
    {
      "id": 2,
      "name": "Node.js Basics",
      "instructor": "Jane Smith",
      "thumbnail": "nodejs_thumbnail.jpg",
      "dueDate": "2024-03-20",
      "progress": 30,
      "completed": false
    },
    {
      "id": 3,
      "name": "Advanced JavaScript",
      "instructor": "Emily Johnson",
      "thumbnail": "advanced_js_thumbnail.jpg",
      "dueDate": "2024-03-25",
      "progress": 20,
      "completed": false
    },
    {
      "id": 4,
      "name": "Python for Data Science",
      "instructor": "Michael Anderson",
      "thumbnail": "python_ds_thumbnail.jpg",
      "dueDate": "2024-04-01",
      "progress": 10,
      "completed": false
    },
    {
      "id": 5,
      "name": "Web Design Fundamentals",
      "instructor": "Sophia Lee",
      "thumbnail": "web_design_thumbnail.jpg",
      "dueDate": "2024-04-05",
      "progress": 60,
      "completed": false
    }
  // Add more dummy enrolled courses as needed
];


// Function to fetch dummy courses
export const fetchCourses = async () => {
  return dummyCourses;
};

// Function to fetch dummy enrolled courses for a student
export const fetchEnrolledCourses = async (studentId) => {
  // For simplicity, always return the same dummy enrolled courses
  return dummyEnrolledCourses;
};

// Function to mark a course as completed (dummy function)
export const markCourseAsCompleted = async (studentId, courseId) => {
  // Dummy function, no actual data is updated
  return Promise.resolve();
};
