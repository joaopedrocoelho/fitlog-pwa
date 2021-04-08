export interface exerciseCategory {
  [exerciseCategories: string]: string[];
}

export interface muscleGroup {
  [muscleGroups: string]: exerciseCategory;
}

export default interface Program {
  [days: string]: muscleGroup;
}

export const DefaultProgram: Program = {
  "Day 1": {
    Chest: {
      warmUp: ["parallel bar dips"],
      main: ["Bench Press", "Inclined Bench press", "Decline Bench press"],
      secondary: ["Dumbbell Flys", "Cable Crossover Flys", "Pec-deck Fly"],
    },
    Biceps: {
      Lola: ["Barbell Curl", "Preacher Curl"],
      bobo: ["Hammer Curls", "Cable Curl", "Dumbbell Curl"],
    },
  },
  "Day 2": {
    Shoulders: {
      coso: ["parallel bar dips"],
      coque: ["Bench Press", "Inclined Bench press", "Decline Bench press"],
      sdary: ["Dumbbell Flys", "Cable Crossover Flys", "Pec-deck Fly"],
    },
    Abs: {
      main: ["Crunch", "Leg raises"],
    },
  },
  "Day 3": {
    Back: {
      warmUp: ["parallel bar dips"],
      main: ["Bench Press", "Inclined Bench press", "Decline Bench press"],
      secondary: ["Dumbbell Flys", "Cable Crossover Flys", "Pec-deck Fly"],
    },
    Triceps: {
      main: ["Barbell Curl", "Preacher Curl"],
      secondary: ["Hammer Curls", "Cable Curl", "Dumbbell Curl"],
    },
  },
};
