import { Question } from "./Questions.js";

export function question(text, correctAnswer, wa1, wa2, wa3) {
  return {
    text: text,
    correctAnswer: correctAnswer,
    wa1: wa1,
    wa2: wa2,
    wa3: wa3,
  };
}

export const MathQuestions = [
  question(
    "What is the value of π (pi) to two decimal places?",
    "3.14",
    "3.12",
    "3.16",
    "3.18",
  ), // 0
  question(
    "If a triangle has angles measuring 45 degrees, 45 degrees, and 90 degrees, what type of triangle is it?",
    "Right",
    "Acute",
    "Obtuse",
    "Equilateral",
  ), // 1
  question("Solve the equation: 2x - 5 = 7.", "6", "1", "3", "4"), // 2
  question("Solve the equation: 3x + 2 = 14.", "4", "3", "5", "6"), // 3
  question(
    "If a rectangle has a length of 8 units and a width of 5 units, what is its area?",
    "40",
    "13",
    "21",
    "35",
  ), // 4
  question(
    "What is the sum of the interior angles of a hexagon?",
    "720",
    "540",
    "360",
    "180",
  ), // 5
  question(
    "If a circle has a radius of 10 units, what is its circumference? (Use π = 3.14)",
    "62.8",
    "31.4",
    "125.6",
    "628",
  ), // 6
  question("What is the value of 5! (5 factorial)?", "120", "25", "60", "600"), // 7
  question(
    "What is the value of 6! (6 factorial)?",
    "720",
    "120",
    "360",
    "7200",
  ), // 8
  question(
    "If a number is divisible by both 121 and 14641, which of the following numbers is it also divisible by?",
    "12",
    "121",
    "14641",
    "169",
  ), // 9
];

export const PhysicsQuestions = [
  question(
    "What is the SI unit of force?",
    "Newton",
    "Joule",
    "Watt",
    "Pascal",
  ), // 0
  question(
    "Which of the following is an example of a vector quantity?",
    "Velocity",
    "Mass",
    "Temperature",
    "Energy",
  ), // 1
  question(
    "According to Newton's third law of motion, for every action, there is an equal and opposite:",
    "Reaction",
    "Force",
    "Mass",
    "Acceleration",
  ), // 2
  question(
    "What is the formula for calculating kinetic energy?",
    "E = 1/2mv^2",
    "E = mv^2",
    "E = 1/2mv",
    "E = mv",
  ), // 3
  question(
    "In which state of matter do particles have the least amount of energy and the least movement?",
    "Solid",
    "Liquid",
    "Gas",
    "Plasma",
  ), // 4
  question(
    "What is the unit of electrical resistance?",
    "Ohm",
    "Volt",
    "Ampere",
    "Watt",
  ), // 5
  question(
    "According to the law of conservation of energy, energy cannot be:",
    "Created or destroyed",
    "Created",
    "Destroyed",
    "Created or destroyed",
  ), // 6
  question(
    "What is the acceleration due to gravity on the surface of Earth? (Approximate value)",
    "9.8 m/s^2",
    "9.8 m/s",
    "9.8 m/s^3",
    "9.8 m/s^4",
  ), // 7
  question(
    "Which electromagnetic wave has the shortest wavelength?",
    "Gamma rays",
    "Radio waves",
    "Microwaves",
    "X-rays",
  ), // 8
  question(
    "What is the law that states that the total electric flux through a closed surface is equal to the charge enclosed divided by the permittivity of free space?",
    "Gauss's law",
    "Coulomb's law",
    "Ohm's law",
    "Ampere's law",
  ), // 9
];

export const ChemistryQuestions = [
  question("What is the chemical symbol for gold?", "Au", "Ag", "Al", "Fe"), // 0
  question("What is the chemical symbol for silver?", "Ag", "Au", "Al", "Fe"), // 1
  question(
    "Which gas makes up the majority of Earth's atmosphere?",
    "Nitrogen",
    "Oxygen",
    "Carbon dioxide",
    "Hydrogen",
  ), // 2
  question("What is the pH of a neutral solution?", "7", "0", "14", "1"), // 3
  question(
    "What is the pH of an acidic solution?",
    "Below 7",
    "Above 7",
    "7",
    "0",
  ), // 4
  question(
    "Which element is essential for life and is the building block of organic compounds?",
    "Carbon",
    "Hydrogen",
    "Oxygen",
    "Nitrogen",
  ), // 5
  question(
    "Which element is the most abundant in the universe?",
    "Hydrogen",
    "Carbon",
    "Oxygen",
    "Nitrogen",
  ), // 6
  question(
    "What is the chemical formula for water?",
    "H2O",
    "H2O2",
    "HO",
    "H2O3",
  ), // 7
  question(
    "What is the chemical formula for carbon dioxide?",
    "CO2",
    "CO",
    "C2O",
    "CO3",
  ), // 8
  question(
    "What is the chemical formula for methane?",
    "CH4",
    "CH3",
    "CH2",
    "CH",
  ), // 9
];

export const HistoryQuestions = [
  question(
    "Which of the following was a major cause of World War I?",
    "Militarism",
    "Imperialism",
    "Alliances",
    "Nationalism",
  ), // 0
  question(
    "Who was the famous queen of ancient Egypt known for her relationships with Julius Caesar and Mark Antony?",
    "Cleopatra",
    "Nefertiti",
    "Hatshepsut",
    "Nefertari",
  ), // 1
  question(
    "The Marshall Plan, initiated after World War II, was designed to provide economic aid to help rebuild which continent?",
    "Europe",
    "Asia",
    "Africa",
    "North America",
  ), // 2
  question(
    "The Renaissance, a cultural and intellectual movement, originated in which European city?",
    "Florence",
    "Rome",
    "Venice",
    "Milan",
  ), // 3
  question(
    "Who was the leader of the Soviet Union during World War II?",
    "Joseph Stalin",
    "Vladimir Lenin",
    "Nikita Khrushchev",
    "Mikhail Gorbachev",
  ), // 4
  question(
    "The French Revolution, a period of radical social and political change, began in which year?",
    "1789",
    "1776",
    "1793",
    "1804",
  ), // 5
  question(
    "Which ancient civilization is known for building the Great Wall?",
    "China",
    "Egypt",
    "Greece",
    "Rome",
  ), // 6
  question(
    "Who was the first President of the United States?",
    "George Washington",
    "Thomas Jefferson",
    "John Adams",
    "James Madison",
  ), // 7
  question(
    "In which year did Christopher Columbus first reach the Americas?",
    "1492",
    "1491",
    "1493",
    "1494",
  ), // 8
  question(
    "What event marked the beginning of World War I in 1914?",
    "Assassination of Archduke Franz Ferdinand",
    "The sinking of the Lusitania",
    "The Battle of Verdun",
    "The signing of the Treaty of Versailles",
  ), // 9
];

export const GeographyQuestions = [
  question(
    "What is the capital of France?",
    "Paris",
    "London",
    "Berlin",
    "Madrid",
  ), // 0
  question(
    "What is the capital of the United States?",
    "Washington, D.C.",
    "New York City",
    "Los Angeles",
    "Chicago",
  ), // 1
  question(
    "Which of the following mountain ranges is the longest in the world?",
    "Andes",
    "Rocky Mountains",
    "Himalayas",
    "Alps",
  ), // 2
  question(
    "What is the capital city of Australia?",
    "Canberra",
    "Sydney",
    "Melbourne",
    "Brisbane",
  ), // 3
  question(
    "In which country would you find the ancient city of Petra, known for its rock-cut architecture?",
    "Jordan",
    "Egypt",
    "Romania",
    "Greece",
  ), // 4
  question(
    "The Great Barrier Reef, one of the world's most famous coral reef systems, is located off the coast of which country?",
    "Australia",
    "Brazil",
    "Indonesia",
    "Japan",
  ), // 5
  question(
    "The highest peak in North America, located in Alaska, is named:",
    "Denali",
    "Mount McKinley",
    "Mount Foraker",
    "Mount Hunter",
  ), // 6
  question(
    "Which desert is the largest hot desert in the world?",
    "Sahara",
    "Gobi",
    "Kalahari",
    "Arabian",
  ), // 7
  question(
    "Which of the following is the largest country in the world by area?",
    "Russia",
    "Canada",
    "China",
    "United States",
  ), // 8
  question(
    "What is the capital of China?",
    "Beijing",
    "Shanghai",
    "Hong Kong",
    "Guangzhou",
  ), // 9
];
