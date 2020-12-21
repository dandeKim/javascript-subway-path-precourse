class PrintResultManager {
  constructor(getLines, getLineResult) {
    this.getLines = getLines;
    this.getLineResult = getLineResult;
  }

  setDOMElements = () => {
    this.$tbody = document.querySelector("#result-table tbody");
  };

  printLines = () => {
    const lineResultText = this.lineResult?.join("➡") || "";
    this.$tbody.innerHTML = `
      <tr>
        <td colspan="2">${lineResultText}</td>
      </tr>
    `;
  };

  render = () => {
    this.setDOMElements();
    this.lines = this.getLines();
    this.lineResult = this.getLineResult();

    this.printLines();
  };
}

export default PrintResultManager;
