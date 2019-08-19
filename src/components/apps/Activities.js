import React from "react";

class Activities extends React.Component {
  state = {};

  render() {
    // let mountain = {
    //     name: "Everest",
    //     height: 345,
    //     describe() { console.log(`Mountain ${this.name} is ${this.height} meters tall`) }
    // }
    return (
      <div className="container">
        <div>
          <div className="mb-2 mt-4">
            <h4>Activities Information</h4>
          </div>

          <div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim
              magni autem omnis! .
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi,
              vel. Omnis, beatae quibusdam delectus quaerat, quia expedita
              doloribus soluta nemo, iste natus numquam facere adipisci ab autem
              necessitatibus asperiores amet.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi,
              vel. Omnis, beatae quibusdam delectus quaerat, quia expedita
              doloribus soluta nemo, iste natus numquam facere adipisci ab autem
              necessitatibus asperiores amet.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi,
              vel. Omnis, beatae quibusdam delectus quaerat, quia expedita
              doloribus soluta nemo, iste natus numquam facere adipisci ab autem
              necessitatibus asperiores amet.
            </p>
          </div>
        </div>
        {/* Activities <h1>{mountain.describe()}</h1> */}
      </div>
    );
  }
}

export default Activities;
