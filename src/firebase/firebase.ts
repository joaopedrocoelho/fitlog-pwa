import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import exerciseGroupsList from "../components/add/default-data/exercisegroups";
import ExercisesList from "../components/add/default-data/exercises";
import muscleList from "../components/add/default-data/muscles";
import Program from "../interfaces/program";

import firebaseConfig from "./config";

class Firebase {
  auth: firebase.auth.Auth;
  user: firebase.User | null | undefined;
  db: firebase.firestore.Firestore;
  userProgram: {} | Program | undefined;
  muscleList: string[] | undefined;
  sectionList: string[] | undefined;
  exercisesList: Record<string, string[]> | undefined;

  constructor() {
    firebase.initializeApp(firebaseConfig);
    this.auth = firebase.auth();
    this.db = firebase.firestore();
    this.userProgram = {};
    this.muscleList = muscleList;
    this.sectionList = exerciseGroupsList;
    this.exercisesList = ExercisesList;
  }

  async register() {
    //creates a doc in the firestore for new users
    if (this.user) {
      await this.db.collection("users").doc(this.user.uid).set({
        name: this.user.displayName,
        email: this.user.email,
        userId: this.user.uid,
        program: {},
        muscleList: this.muscleList,
        sectionList: this.sectionList,
        exerciseList: this.exercisesList,
      });
    }
  }

  async checkIn(user: firebase.User): Promise<any> {
    this.user = user;
    await this.db
      .collection("users")
      .doc(this.user?.uid)
      .get()
      .then((doc) => {
        if (doc.exists) {
          //if it exists it's an old user
          this.userProgram = doc.data()?.program;
          this.muscleList = doc.data()?.muscleList;
          this.sectionList = doc.data()?.sectionList;
          this.exercisesList = doc.data()?.exerciseList;

          console.log(
            "properties",
            this.userProgram,
            this.muscleList,
            this.sectionList,
            this.exercisesList
          );
        } else {
          //if it doesn't it's a new user
          this.register();
          return;
        }
      });
  }

  async login() {
    //logs in with google
    const provider = new firebase.auth.GoogleAuthProvider();
    return await this.auth.signInWithRedirect(provider);
  }

  async logout() {
    // logs out
    return await this.auth.signOut().then(() => console.log("logged out"));
  }

  async updateProgram(newProgram: {}) {
    await this.db
      .collection("users")
      .doc(this.user?.uid)
      .update({
        program: newProgram,
      })
      .then(() => console.log("Program updated successfully!"))
      .catch((error: any) => console.error("Error updating program:", error));
  }

  async updateMuscleList(newMuscleList: string[] | undefined) {
    await this.db
      .collection("users")
      .doc(this.user?.uid)
      .update({
        SectionList: newMuscleList,
      })
      .then(() => console.log("List of muscles updated successfully!"))
      .catch((error: any) => console.error("Error updating list:", error));
  }

  async updateSectionList(newSectionList: string[] | undefined) {
    await this.db
      .collection("users")
      .doc(this.user?.uid)
      .update({
        SectionList: newSectionList,
      })
      .then(() => console.log("List of sections updated successfully!"))
      .catch((error: any) => console.error("Error updating list:", error));
  }

  async updateExerciseList(
    newExerciseList: Record<string, string[]> | undefined
  ) {
    await this.db
      .collection("users")
      .doc(this.user?.uid)
      .update({
        exerciseList: newExerciseList,
      })
      .then(() => console.log("List of exercises updated successfully!"))
      .catch((error: any) => console.error("Error updating list:", error));
  }
}

const firebaseApp = new Firebase();
export default firebaseApp;
