import React, { useContext, useEffect } from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import { useAuthState } from "react-firebase-hooks/auth";
import firebaseApp from "../../firebase";
import ProgramContext from "../../context/program";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "white",
    justifyContent: "center",
    marginTop: "1cm",
  },
  title: {
    margin: "1cm auto 2cm auto",

    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "nowrap",
    color: "#0d2f59",
    borderBottom: `0.15cm solid var(--light-red)`,
    paddingBottom: `0.15cm`,
    fontWeight: "900",
    fontSize: "2.2cm",
  },
  day: {
    display: "flex",
    width: "100%",
    margin: "1em 0",
    paddingLeft: "1cm",
    paddingBottom: "0.5cm",
    fontWeight: "bold",
    fontSize: "1.5cm",
    color: "var(--darkest-grey)",
    borderBottom: `0.18cm solid #56cfe1`,
  },

  muscle: {
    display: "flex",
    width: "100%",
    margin: "1cm 0",
    paddingLeft: "2cm",
    fontWeight: "bold",
    fontSize: "1.2cm",
    color: "var(--dark-grey)",
  },

  section: {
    display: "flex",
    width: "100%",
    margin: "1cm 0",
    paddingLeft: "4cm",
    fontWeight: "medium",
    fontSize: "1cm",
    color: "var(--medium-grey)",
    textTransform: "uppercase",
  },

  exercise: {
    display: "flex",
    width: "100%",
    margin: "0 auto 1cm auto",
    paddingLeft: "5cm",
    fontWeight: "light",
    fontSize: "1cm",
    color: "black",
  },
});

// Create Document Component
const PDFDocument = () => {
  const { days } = useContext(ProgramContext);

  useEffect(() => {
    console.log("days", days);
  }, [days]);

  const [user] = useAuthState(firebaseApp.auth);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View>
          <Text>{`${user.displayName}'s Workout Plan`}</Text>
        </View>
        {days.map(([day, data], index) => {
          const muscleGroups = Object.entries(data);
          return (
            <>
              <View>
                <Text>{day}</Text>
              </View>
            </>
          );
        })}
      </Page>
    </Document>
  );
};

export default PDFDocument;

/* <Document
      title={`${user.displayName}'s Workout Plan`}
      author={`${user.displayName}`}
    >
      <Page size="A4" style={styles.page} wrap={true}>
        <View style={styles.title}>
          <Text>{`${user.displayName}'s Workout Plan`}</Text>
        </View>
        {days.map(([day, data], index) => {
          const muscleGroups = Object.entries(data);
          return (
            <>
              <View style={styles.day}>
                <Text>{day}</Text>
              </View>
              <View>
                {muscleGroups.map(([muscle, section], index) => {
                  const sections = Object.entries(section);

                  return (
                    <>
                      <View style={styles.muscle}>
                        <Text>{muscle}</Text>
                      </View>
                      {sections.map(([section, exercises], index) => {
                        return (
                          <>
                            <View style={styles.section}>
                              <Text>{section}</Text>
                            </View>
                            {exercises.map((exercise) => {
                              return (
                                <View style={styles.exercise}>
                                  <Text>{exercise}</Text>
                                </View>
                              );
                            })}
                          </>
                        );
                      })}
                    </>
                  );
                })}
              </View>
            </>
          );
        })}
      </Page>
    </Document> */
