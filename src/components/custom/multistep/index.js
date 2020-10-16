import React, { Component,Button } from "react";
import { uuid } from "../../../lib";
import { Text, View } from "react-native";

import styles from "./styles";

export default class MultiStep extends Component {
  // static propTypes = {
  //   initialStep: PropTypes.number,
  //   steps: PropTypes.array,
  //   finalScreen: PropTypes.element,
  //   getStarted: PropTypes.func,
  //   showNavigation: PropTypes.bool,
  //   showPreviousBtn: PropTypes.bool,
  //   showNextBtn: PropTypes.bool,
  //   nextText: PropTypes.string
  // };

  static defaultProps = {
    initialStep: 0,
    steps: [],
    finalScreen: <Text />,
    getStarted: () => {},
    showNavigation: false,
    showPreviousBtn: false,
    showNextBtn: false,
    nextText: ""
  };

  constructor(props) {
    super(props);

    this.state = {
      showPreviousBtn: true,
      showNextBtn: true,
      compState: this.props.initialStep || 0,
      navState: this.getNavStates(0, this.props.steps.length),
      doneAll: false
    };
    this.handleOnClick = this.handleOnClick.bind(this);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.getContainerStyle = this.getContainerStyle.bind(this);
    this.getNavStates = this.getNavStates.bind(this);
    this.renderSteps = this.renderSteps.bind(this);
  }

  getNavStates = (indx, length) => {
    const state = [];
    for (let i = 0; i < length; i += 1) {
      if (i < indx) {
        state.push("done");
      } else if (i === indx) {
        state.push("doing");
      } else {
        state.push("todo");
      }
    }
    return { current: indx, styles: state };
  };

  setNavState(next) {
    this.setState({
      navState: this.getNavStates(next, this.props.steps.length)
    });
    if (next < this.props.steps.length) {
      this.setState({ compState: next });
    }
    this.checkNavState(next);
  }

  getContainerStyle(i) {
    let style;
    switch (this.state.navState.styles[i]) {
      case "doing":
        style = styles.currentStep;
        break;
      case "done":
        style = styles.doneStep;
        break;
      case "todo":
      default:
        style = styles.todoStep;
    }
    return style;
  }

  getTextStyle(i) {
    let style;
    switch (this.state.navState.styles[i]) {
      case "doing":
        style = styles.currentStepText;
        break;
      case "done":
        style = styles.doneStepText;
        break;
      case "todo":
      default:
        style = styles.todoStepText;
    }
    return style;
  }

  handleOnClick = index => {
    if (
      index === this.props.steps.length - 1 &&
      this.state.compState === this.props.steps.length - 1
    ) {
      this.setNavState(this.props.steps.length);
    } else {
      this.setNavState(index);
    }
  };

  next() {
    if (
      this.state.compState === this.props.steps.length - 1 &&
      this.props.finalScreen
    ) {
      this.setState({
        doneAll: true
      });
    }
    if (this.state.doneAll) {
      this.props.getStarted();
    }
    this.setNavState(this.state.compState + 1);
  }

  previous() {
    if (this.state.compState > 0) {
      this.setNavState(this.state.compState - 1);
    }
  }

  checkNavState = currentStep => {
    if (currentStep > 0 && currentStep !== this.props.steps.length - 1) {
      this.setState({
        showPreviousBtn: true,
        showNextBtn: true
      });
    } else if (currentStep === 0) {
      this.setState({
        showPreviousBtn: false,
        showNextBtn: true
      });
    } else if (currentStep === this.props.steps.length - 1) {
      this.setState({
        showPreviousBtn: false,
        showNextBtn: true
      });
    } else {
      this.setState({
        showPreviousBtn: true,
        showNextBtn: false
      });
    }
  };

  renderSteps() {
    return this.props.steps.map((s, i) => (
      <View key={uuid()} style={{ flexDirection: "row", alignItems: "center" }}>
        <View
          style={[
            styles.stepNav,
            this.getContainerStyle(i),
            { flexDirection: "row", alignItems: "center" }
          ]}
        >
          {this.state.navState.styles[i] === "done" ? (
            <Icon
              name="md-checkmark"
              style={{ color: "#FFF", fontSize: 15, marginRight: 10 }}
            />
          ) : null}
          <Text style={this.getTextStyle(i)}>{this.props.steps[i].name}</Text>
        </View>
        {i < this.props.steps.length - 1 ? (
          <View style={[styles.stepSep, this.getContainerStyle(i)]} />
        ) : null}
      </View>
    ));
  }

  render() {
    return (
      <View
        onPress={this.handleKeyDown}
        style={{ flexDirection: "column", justifyContent: "center" }}
      >
        <View style={{ flexDirection: "row", marginBottom: 10 }}>
          {this.renderSteps()}
        </View>
        {this.state.doneAll
          ? this.props.finalScreen || null
          : this.props.steps[this.state.compState].component}
        {this.props.showNavigation ? (
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            {this.props.showPreviousBtn && this.state.showPreviousBtn ? (
              <Button onPress={this.previous} block style={styles.navBtn}>
                <Text style={styles.mainButtonText}>Previous</Text>
              </Button>
            ) : null}

            {this.props.showNextBtn && this.state.showNextBtn ? (
              <Button onPress={this.next} block style={styles.navBtn}>
                <Text style={styles.mainButtonText}>
                  {this.state.doneAll
                    ? "Get Started"
                    : this.props.nextText || "Next"}
                </Text>
              </Button>
            ) : null}
          </View>
        ) : null}
      </View>
    );
  }
}

MultiStep.defaultProps = {
  showNavigation: true,
  showPreviousBtn: false,
  next: () => {}
};

// MultiStep.PropTypes = {
//   handleNext: React.PropTypes.Func
// }
