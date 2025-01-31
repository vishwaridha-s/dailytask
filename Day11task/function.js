var Split = function() {
    this.$t = $(".split");
    this.gridX = 6;
    this.gridY = 4;
    this.w = this.$t.width();
    this.h = this.$t.height();
    this.img = $("img", this.$t).attr("src");
    this.delay = 0.05;
  
    this.create = function() {
        $("div", this.$t).remove();
  
        for (let x = 0; x < this.gridX; x++) {
            for (let y = 0; y < this.gridY; y++) {
                var width = (this.w / this.gridX) * 101 / this.w + "%",
                    height = (this.h / this.gridY) * 101 / this.h + "%",
                    top = (this.h / this.gridY) * y * 100 / this.h + "%",
                    left = (this.w / this.gridX) * x * 100 / this.w + "%",
                    bgPosX = -(this.w / this.gridX * x) + "px",
                    bgPosY = -(this.h / this.gridY * y) + "px";
  
                $("<div />")
                    .css({
                        top: top,
                        left: left,
                        width: width,
                        height: height,
                        backgroundImage: "url(" + this.img + ")",
                        backgroundPosition: bgPosX + " " + bgPosY,
                        backgroundSize: this.w + "px",
                        transitionDelay: (x * this.delay + y * this.delay) + "s",
                        position: "absolute"
                    })
                    .appendTo(this.$t);
            }
        }
    };
  
    this.create();
  
    this.$t.on("click", function() {
        $("div", this).each(function() {
            var randomX = Math.random() * 500 - 250; // Random X offset
            var randomY = Math.random() * 500 - 250; // Random Y offset
            var randomRotation = Math.random() * 360; // Random rotation
  
            $(this).css({
                transform: `translate(${randomX}px, ${randomY}px) rotate(${randomRotation}deg)`,
                opacity: 1
            });
        });
        $(this).toggleClass("active");
    }).click();
};
  
window.onload = function() {
    var split = new Split();
    var webdev = (function datwebdev() {
        var webdev = new dat.webdev();
        webdev.add(split, "gridX", 1, 20).step(1).onChange(function(newValue) {
            split.create();
        });
        webdev.add(split, "gridY", 1, 20).step(1).onChange(function(newValue) {
            split.create();
        });
        webdev.add(split, "delay", 0, 0.3).step(0.01).onChange(function(newValue) {
            split.create();
        });
        return webdev;
    })();
};
