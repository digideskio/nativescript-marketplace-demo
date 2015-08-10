import pages = require("ui/page");
import buttonModule = require("ui/button");
import gridModule = require("ui/layouts/grid-layout");
import navigator = require("../common/navigator");

export class ExamplePage extends pages.Page {
	public onLoaded() {
		super.onLoaded();
		console.log("ExamplePage.onLoaded()");

		if (!(this.content instanceof gridModule.GridLayout)) {
			// We can remove this limitation in future if it is a problem.
			throw new Error("Root of example page should be Grid");
		}

		var root = <gridModule.GridLayout>this.content;
		var btn = new buttonModule.Button();
		btn.text = "^";
		btn.style.verticalAlignment = "bottom";
		btn.style.horizontalAlignment = "left";
		btn.on("tap", (args) => {
			// TODO: plug animations here
			navigator.navigateBack();
		});

		gridModule.GridLayout.setRow(btn, 100);
		root.addChild(btn);
	}

	private createButton(): buttonModule.Button {
		var btn = new buttonModule.Button();
		btn.text = "^";
		btn.style.verticalAlignment = "bottom";
		btn.style.horizontalAlignment = "left";
		btn.on("tap", (args) => {
			// TODO: plug animations here
			navigator.navigateBack();
		});
		
		return btn;
	}
}