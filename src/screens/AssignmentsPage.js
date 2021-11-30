import React from "react";

const AssignmentsPage = () => {
  return (
    <main style={{ marginTop: "1rem" }}>
      <h1 style={{ marginLeft: "2rem" }}>Assignments</h1>
      <section
        style={{ display: "flex", flexDirection: "column", margin: "0 2rem" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#e5e5e5",
            padding: "1rem",
            marginBottom: "1rem",
            borderRadius: "5px",
          }}>
          <p style={{ margin: 0, padding: 0 }}>Assignment 3</p>
          <p style={{ margin: 0, padding: 0 }}>Due Tue 26, 2021</p>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#e5e5e5",
            padding: "1rem",
            marginBottom: "1rem",
            borderRadius: "5px",
          }}>
          <p style={{ margin: 0, padding: 0 }}>Assignment 2</p>
          <p style={{ margin: 0, padding: 0 }}>Late Submission</p>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#e5e5e5",
            padding: "1rem",
            marginBottom: "1rem",
            borderRadius: "5px",
          }}>
          <p style={{ margin: 0, padding: 0 }}>Assignment 1</p>
          <p style={{ margin: 0, padding: 0 }}>Submitted</p>
        </div>
      </section>
    </main>
  );
};

export default AssignmentsPage;
