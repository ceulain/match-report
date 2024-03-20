export class Action {
  static actionCount = 0;

  type: string;
  player: string;
  time: string;

  constructor(type: string, player: string, time: string) {
    this.type = type;
    this.player = player;
    this.time = time;
  }

  create() {
    const actions = document.querySelector("#actions");

    const action = document.createElement("div");
    action.setAttribute("id", `action-${Action.actionCount}`);
  }
}
