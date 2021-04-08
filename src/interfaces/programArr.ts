interface exerciseCategory {
  [exerciseCategories: string]: string[];
}

interface muscleGroup {
  [muscleGroups: string]: exerciseCategory;
}

export default interface Program {
  [days: string]: muscleGroup;
}

export const program: Program = {
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

// eu quero uma classe que tenha metodos para editar e deletar o program
export class Workout {
  days: string[];
  workout: Program;
  muscleGroups: string[];

  constructor(public program: Program) {
    this.days = Object.keys(program);
    this.workout = program;

    let workoutkeys: any[] = [];
    for (let i = 0; i < this.days.length; i++) {
      workoutkeys.push(Object.keys(this.workout[this.days[i]]));
    }
    this.muscleGroups = workoutkeys;
    // take all the keys inside each muscleGroup object
  }
}

export const myGymProgram = new Workout(program);

//console.log("Day1", myGymProgram.workout["Day 1"][0]) // "Day1",  ["parallel bar dips"]
