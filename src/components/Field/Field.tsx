import React from "react";
import "./Field.css";

interface IState {
  field: number[];
  snakeHead: number;
  snake: number[];
  reward: number;
}

export default class Field extends React.Component<any, {}> {
  state: IState = {
    field: [],
    snakeHead: 0,
    snake: [],
    reward: 0,
  };
  constructor(props: any) {
    super(props);
    this.state = {
      field: [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
        26,
        27,
        28,
        29,
        30,
        31,
        32,
        33,
        34,
        35,
        36,
        37,
        38,
        39,
        40,
        41,
        42,
        43,
        44,
        45,
        46,
        47,
        48,
        49,
        50,
        51,
        52,
        53,
        54,
        55,
        56,
        57,
        58,
        59,
        60,
        61,
        62,
        63,
      ],
      snakeHead: 36,
      snake: [36],
      reward: Math.floor(Math.random() * (63 - 0)) + 0,
    };
    this.goDown = this.goDown.bind(this);
    this.goUp = this.goUp.bind(this);
    this.goLeft = this.goLeft.bind(this);
    this.goRight = this.goRight.bind(this);
  }

  async goRight(e: any) {
    let snakeArr: number[] = [];
    if (e.keyCode === 39) {
      snakeArr = this.state.snake.slice(0);
      let arr = snakeArr.slice(0);
      for (let i = 1; i < snakeArr.length; i++) {
        snakeArr[i] = arr[i - 1];
      }
      if ([7, 15, 23, 31, 39, 47, 55, 63].includes(snakeArr[0])) {
        snakeArr[0] = snakeArr[0] - 7;
      } else {
        snakeArr[0] = snakeArr[0] + 1;
      }
      this.setState({
        snakeHead: snakeArr[0],
      });
      let body = snakeArr.slice(1);
      if (body.includes(snakeArr[0])) {
        alert("You have lost!");
        window.location.reload();
      }

      await this.setState({
        snake: snakeArr.slice(0),
      });
      if (this.state.snake[0] === this.state.reward) {
        let newarr = this.state.snake.slice(0);
        newarr.push(this.state.reward);
        let isNotRandom: boolean = true;
        let randomNum = -1;
        while (isNotRandom) {
          let num = Math.floor(Math.random() * (63 - 0)) + 0;
          if (newarr.includes(num)) {
            isNotRandom = true;
          } else {
            isNotRandom = false;
            randomNum = num;
          }
        }
        this.setState({
          snake: newarr,
          reward: randomNum,
        });
      }
    }
  }
  async goLeft(e: any) {
    let snakeArr: number[] = [];
    if (e.keyCode === 37) {
      snakeArr = this.state.snake.slice(0);
      let arr = snakeArr.slice(0);
      for (let i = 1; i < snakeArr.length; i++) {
        snakeArr[i] = arr[i - 1];
      }
      if ([0, 8, 16, 24, 32, 40, 48, 56].includes(snakeArr[0])) {
        snakeArr[0] = snakeArr[0] + 7;
      } else {
        snakeArr[0] = snakeArr[0] - 1;
      }
      this.setState({
        snakeHead: snakeArr[0],
      });
      let body = snakeArr.slice(1);
      if (body.includes(snakeArr[0])) {
        alert("You have lost!");
        window.location.reload();
      }
      await this.setState({
        snake: snakeArr.slice(0),
      });
      if (this.state.snake[0] === this.state.reward) {
        let newarr = this.state.snake.slice(0);
        newarr.push(this.state.reward);
        let isNotRandom: boolean = true;
        let randomNum = -1;
        while (isNotRandom) {
          let num = Math.floor(Math.random() * (63 - 0)) + 0;
          if (newarr.includes(num)) {
            isNotRandom = true;
          } else {
            isNotRandom = false;
            randomNum = num;
          }
        }
        this.setState({
          snake: newarr,
          reward: randomNum,
        });
      }
    }
  }
  async goUp(e: any) {
    let snakeArr: number[] = [];
    if (e.keyCode === 38) {
      snakeArr = this.state.snake.slice(0);
      let arr = snakeArr.slice(0);
      for (let i = 1; i < snakeArr.length; i++) {
        snakeArr[i] = arr[i - 1];
      }
      if (snakeArr[0] < 8) {
        snakeArr[0] = snakeArr[0] + 56;
      } else {
        snakeArr[0] = snakeArr[0] - 8;
      }
      this.setState({
        snakeHead: snakeArr[0],
      });

      let body = snakeArr.slice(1);
      if (body.includes(snakeArr[0])) {
        alert("You have lost!");
        window.location.reload();
      }

      await this.setState({
        snake: snakeArr.slice(0),
      });
      if (this.state.snake[0] === this.state.reward) {
        let newarr = this.state.snake.slice(0);
        newarr.push(this.state.reward);
        let isNotRandom: boolean = true;
        let randomNum = -1;
        while (isNotRandom) {
          let num = Math.floor(Math.random() * (63 - 0)) + 0;
          if (newarr.includes(num)) {
            isNotRandom = true;
          } else {
            isNotRandom = false;
            randomNum = num;
          }
        }
        this.setState({
          snake: newarr,
          reward: randomNum,
        });
      }
    }
  }
  async goDown(e: any) {
    let snakeArr: number[] = [];
    if (e.keyCode === 40) {
      snakeArr = this.state.snake.slice(0);
      let arr = snakeArr.slice(0);
      for (let i = 1; i < snakeArr.length; i++) {
        snakeArr[i] = arr[i - 1];
      }
      if (snakeArr[0] > 55) {
        snakeArr[0] = snakeArr[0] - 56;
      } else {
        snakeArr[0] = snakeArr[0] + 8;
      }
      this.setState({
        snakeHead: snakeArr[0],
      });

      let body = snakeArr.slice(1);
      if (body.includes(snakeArr[0])) {
        alert("You have lost!");
        window.location.reload();
      }

      await this.setState({
        snake: snakeArr.slice(0),
      });
      if (this.state.snake[0] === this.state.reward) {
        let newarr = this.state.snake.slice(0);
        newarr.push(this.state.reward);
        let isNotRandom: boolean = true;
        let randomNum = -1;
        while (isNotRandom) {
          let num = Math.floor(Math.random() * (63 - 0)) + 0;
          if (newarr.includes(num)) {
            isNotRandom = true;
          } else {
            isNotRandom = false;
            randomNum = num;
          }
        }
        this.setState({
          snake: newarr,
          reward: randomNum,
        });
      }
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.goLeft, false);
    document.addEventListener("keydown", this.goRight, false);
    document.addEventListener("keydown", this.goUp, false);
    document.addEventListener("keydown", this.goDown, false);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.goLeft, false);
    document.removeEventListener("keydown", this.goRight, false);
    document.removeEventListener("keydown", this.goUp, false);
    document.removeEventListener("keydown", this.goDown, false);
  }

  render() {
    return (
      <div className="field__container">
        {this.state.field.map((value, index) => {
          let snakeStyle = {};
          let rewardStyle = {};
          let headStyle = {};
          if (this.state.snakeHead === this.state.field[index]) {
            headStyle = {
              border: "green solid 4px",
            };
          } else {
            headStyle = {
              border: "white solid 4px",
            };
          }
          if (this.state.snake.includes(index)) {
            snakeStyle = {
              backgroundColor: "black",
              color: "black",
            };
          } else {
            snakeStyle = {
              backgroundColor: "white",
            };
          }
          if (this.state.reward === this.state.field[index]) {
            rewardStyle = {
              border: "red 2px solid",
            };
          } else {
            rewardStyle = {
              border: "solid white 2px",
            };
          }
          return (
            <div
              className="field__square"
              key={index}
              id={`${index}`}
              style={Object.assign({}, snakeStyle, rewardStyle)}
            >
              <div className="field__subsquare" style={headStyle}>{value}</div>
            </div>
          );
        })}
      </div>
    );
  }
}
