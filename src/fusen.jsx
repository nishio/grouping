const FUSEN_WIDTH = 130;
const FUSEN_HEIGHT = 100;
const DEFAULT_FONT_SIZE = 16;

class AdjustText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.set_text(this.props.text);
  }

  /**
   * get width and height of given text
   * @param {string} content .
   * @return {{x: number, y: number}} .
   * @suppress {checkTypes}
   */
  get_content_extent(content) {
    var t = content.replace("\n", "<br/>");
    var a = $("<span>" + t + "</span>")
      .css("font-family", "arial")
      .css("font-size", DEFAULT_FONT_SIZE + "px")
      .css("display", "none")
      .appendTo("body");
    var r = { x: a.width(), y: a.height() };
    a.remove();

    return r;
  }

  /**
   * choose nice font-size to fit in given box
   * @param {string} content .
   * @param {number} w .
   * @param {number} h .
   * @return {{scale: number, n_split: number}} .
   */
  fit_in(content, w, h) {
    var size = this.get_content_extent(content);
    var max_scale = Math.min(w / size.x, h / size.y);
    var n_split = 2;
    while (true) {
      var s = this.split_str(content, n_split).join("<br/>");
      size = this.get_content_extent(s);
      var scale = Math.min(w / size.x, h / size.y);
      if (scale <= max_scale) {
        return {
          scale: max_scale,
          font_size: DEFAULT_FONT_SIZE * max_scale,
          n_split: n_split - 1
        };
      }
      max_scale = scale;
      n_split++;
    }
  }

  split_str(s, n) {
    var len = s.length;
    var m = Math.ceil(len / n);
    var result = [];
    var t = "";
    for (var i = 0; i < len; i++) {
      t += s[i];
      if (t.length == m) {
        result.push(t);
        t = "";
      }
    }
    if (t != "") {
      result.push(t);
    }
    return result;
  }

  set_text(content) {
    var adjust = this.fit_in(content, FUSEN_WIDTH, FUSEN_HEIGHT);
    this.state.lines = this.split_str(content, adjust.n_split);
    this.state.fontsize = adjust.font_size;
  }

  update_text(content) {
    var adjust = this.fit_in(content, FUSEN_WIDTH, FUSEN_HEIGHT);
    var lines = this.split_str(content, adjust.n_split);
    var font = adjust.font_size;

    this.setState(prevState => {
      return {
        lines: lines,
        fontsize: adjust.font_size
      };
    });
  }

  render_lines(text_x) {
    console.log(this.state.fontsize);
    var full_height = this.state.fontsize * this.state.lines.length;
    var initial_dy = -full_height / 2 + this.state.fontsize * 0.9;

    return this.state.lines.map((line, index) => {
      if (index == 0) {
        return (
          <tspan x={text_x} key={index} dy={initial_dy}>
            {line}
          </tspan>
        );
      }
      return (
        <tspan x={text_x} key={index} dy={this.state.fontsize}>
          {line}
        </tspan>
      );
    });
  }

  render() {
    var x = this.props.x;
    var y = this.props.y;
    var text_x = x + 65;
    var text_y = y + 50;
    var lines = this.render_lines(text_x);
    var font = this.state.fontsize + "px arial";
    return (
      <text
        x={text_x}
        y={text_y}
        textAnchor="middle"
        fontSize={this.state.fontsize}
        stroke="none"
        fill="#000000"
      >
        {lines}
      </text>
    );
  }
}

export class Fusen extends React.Component {
  constructor(props) {
    super(props);
    var x = parseFloat(this.props.x) || 100;
    var y = parseFloat(this.props.y) || 100;
    this.state = { x: x, y: y, selected: false };
    this.handleClick = this.handleClick.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handlehandleMouseUp = this.handleMouseUp.bind(this);
  }

  handleMouseDown(e) {
    var screenX = e.screenX,
      screenY = e.screenY;
    this.setState(p => ({
      dragStartX: screenX,
      dragStartY: screenY,
      originalX: p.x,
      originalY: p.y
    }));
    dragTarget = this;
  }
  handleMouseMove(e) {}
  handleMouseUp(e) {}

  handleClick(e) {
    //this.setState(p=>({selected: !p.selected}));
  }

  render() {
    return (
      <g>
        <rect
          x={this.state.x}
          y={this.state.y}
          onClick={this.handleClick}
          onMouseDown={this.handleMouseDown}
          onMouseMove={this.handleMouseMove}
          onMouseUp={this.handleMouseUp}
          width="130"
          height="100"
          stroke="#aaa"
          strokeWidth={this.state.selected ? "2" : "0.3"}
          strokeOpacity="0.9"
          fill="#ffc"
          fillOpacity="0.8"
        />

        <AdjustText x={this.state.x} y={this.state.y} text={this.props.text} />
      </g>
    );
  }
}

var dragTarget = null;
export function handleMouseMove(e) {
  if (e.buttons == 0) return;
  if (dragTarget == null) return;
  var dx = e.screenX - dragTarget.state.dragStartX;
  var dy = e.screenY - dragTarget.state.dragStartY;
  dragTarget.setState(p => ({
    x: p.originalX + dx,
    y: p.originalY + dy
  }));
  e.preventDefault();
}

