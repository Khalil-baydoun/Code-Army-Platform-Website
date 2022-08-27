import { observer } from "mobx-react-lite";
import React from "react";
import { Link } from "react-router-dom";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
  Container,
  Divider,
  Grid,
  GridColumn,
  GridRow,
  Header,
  Icon,
  Label,
  Segment,
} from "semantic-ui-react";
import { progLanguageToSyntaxHighlighterLanguage, verdicts } from "../../app/common/util/commanData";
import { ISubmission } from "../../app/models/courseProblemSet";


interface DetailParams {
  submission: ISubmission;
}

const SubmissionReport: React.FC<DetailParams> = ({
  submission
}) => {
  const FailedSubmissionReport = () => {
    if (verdicts[submission.Verdict].summary == "ACC" || verdicts[submission.Verdict].summary == "IQ") return;
    let input = submission?.WrongTestInput.split("\r\n").map((str, i) => (
      <p className="subRep" key={"inp" + i}>
        {str}
      </p>
    ));
    let expout = submission.ExpectedOutput.split("\r\n").map(
      (str, i) => (
        <p className="subRep" key={"exp" + i}>
          {str}
        </p>
      )
    );
    if (verdicts[submission.Verdict].summary == "WA") {
      let actout = submission.ActualOutput.split("\r\n").map((str, i) => (
        <p className="subRep" key={"act" + i}>
          {str}
        </p>
      ));
      return (
        <Segment>
          <Divider horizontal>
            <Header as="h4">
              <Icon name="exclamation triangle" color="red" />
              Wrong Test
            </Header>
          </Divider>
          <div>
            <Segment>
              <h4>Input:</h4>
              {input}
            </Segment>
            <Segment>
              <h4>Expected Output:</h4>
              {expout}
            </Segment>
            <Segment>
              <h4>Actual Output:</h4>
              {actout}
            </Segment>
          </div>
        </Segment>
      );
    }

    else if (verdicts[submission.Verdict].summary == "CE") {
      return (
        <Segment>
          <Divider horizontal>
            <Header as="h4">
              <Icon name="exclamation triangle" color="red" />
              Compilation Error
            </Header>
          </Divider>
          <div>
            <Segment>
              <h4>Compiler Error Message:</h4>
              <p style={{ fontFamily: "monospace", whiteSpace: 'break-spaces' }}>{submission.CompilerErrorMessage}</p>
            </Segment>
          </div>
        </Segment>
      );
    }
    else if (verdicts[submission.Verdict].summary == "RE") {
      return (
        <Segment>
          <Divider horizontal>
            <Header as="h4">
              <Icon name="exclamation triangle" color="red" />
              Runtime Error
            </Header>
          </Divider>
          <div>
            <Segment>
              <h4>Runtime Error Message:</h4>
              <p style={{ fontFamily: "monospace", whiteSpace: 'break-spaces' }}>{submission.RuntimeErrorMessage}</p>
            </Segment>
            <Segment>
              <h4>Input:</h4>
              {input}
            </Segment>
            <Segment>
              <h4>Expected Output:</h4>
              {expout}
            </Segment>
          </div>
        </Segment>
      );
    }
  };
  return (
    <Segment>
      <Header
        as="h2"
        content={`Submission Report #${submission.Id}`}
        style={{ marginBottom: "1em", color: "#2f4858" }}
      />
      <Grid>
        {verdicts[submission.Verdict].summary != "IQ" && <GridRow>
          <GridColumn>
            <h4 style={{ color: verdicts[submission.Verdict].summary == "ACC" ? "green" : "red" }}>
              Tests Passed : {submission.TestsPassed + '/' + submission.TotalTests}</h4>
          </GridColumn>
        </GridRow>}
        <GridRow>
          <Container>
            <Segment>
              <Segment>
                <Divider horizontal>
                  <Header as="h4">
                    <Icon name="code" color="teal" />
                    Source Code
                  </Header>
                </Divider>
                <SyntaxHighlighter language={
                  submission?.ProgrammingLanguage != null ? progLanguageToSyntaxHighlighterLanguage[submission.ProgrammingLanguage!] : "python"}>
                  {submission.SourceCode}
                </SyntaxHighlighter>
              </Segment>
              {FailedSubmissionReport()}
            </Segment>
            <Segment textAlign="center">
              <Label style={{ fontSize: "12pt" }}>
                <Icon name="lightbulb outline" color="yellow"></Icon>
                <strong>
                  To know more about the verdict you got, check the
                  <Link to={'/verdictsGuide'}> verdicts guide </Link>
                </strong>
              </Label>
            </Segment>
          </Container>
        </GridRow>
      </Grid>
    </Segment>
  );
};

export default observer(SubmissionReport);
