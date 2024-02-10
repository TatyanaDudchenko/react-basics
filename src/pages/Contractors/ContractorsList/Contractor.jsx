import React from "react";

const Contractor = (props) => {
    const { contractorsName, contractDate, contactFaces, note } = props;

    return (
        <div>
            <ul style={{
                listStyleType: "none",
                border: "1px solid black",
                marginTop: "2px",
                padding: "5px"
            }}>
                <li>{contractorsName}</li>
                <li>{contractDate}</li>
                <ul style={{
                    listStyleType: "none",
                    marginTop: "10px",
                    marginBottom: "10px"
                }}>
                    <li>{contactFaces.contact1.name}</li>
                    <li>{contactFaces.contact1.jobTitle}</li>
                    <li>{contactFaces.contact1.phoneNumber}</li>
                </ul>
                <ul style={{
                    listStyleType: "none",
                    marginTop: "10px",
                    marginBottom: "10px"
                }}>
                    <li>{contactFaces.contact2.name}</li>
                    <li>{contactFaces.contact2.jobTitle}</li>
                    <li>{contactFaces.contact2.phoneNumber}</li>
                </ul>
                <li>{note}</li>
            </ul>

        </div>
    );
};

export default Contractor;