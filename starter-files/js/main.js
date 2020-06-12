$(function () {
	// write your code here
	let allArr = [];
	$.get("https://json-project3.herokuapp.com/products", function (data) {
		allArr = data.slice()
		createCard(allArr)
		filtered()
	})

	function createCard(arr) {
		$.each(arr, function (i, el) {
			$("#right").append(`<div class="col-md-4">
						<div class="thumbnail">
						  <img src="./starter-files/img/${el.image}.png" />

						  <div class="caption">
							<h3>${el.name}</h3>
							<p>${el.price} $</p> 
						</div>
				</div>
			  </div>`)
		})
	}

	$("#left p").click(function () {
		$("#left p").removeClass("color1").next().removeClass("color2");
		$(this).addClass("color1").next().addClass("color2")

		let filteredArr1 = allArr.filter(user => user.gender.toLowerCase() === $(this).text().toLowerCase() || user.brand === $(this).text())
		$("#right").html("")
		createCard(filteredArr1)
	})

	$(".btnAll").click(function () {
		createCard(allArr)
	})

	function filtered() {
		let maleArr = allArr.filter(user => user.gender === ("MALE"))
		let femaleArr = allArr.filter(user => user.gender === ("FEMALE"))
		let leGrandArr = allArr.filter(user => user.name.includes("LE GRAND"))
		let kross = allArr.filter(user => user.name.includes("KROSS"))
		let explorer = allArr.filter(user => user.name.includes("EXPLORER"))
		let visitor = allArr.filter(user => user.name.includes("VISITOR"))
		let pony = allArr.filter(user => user.name.includes("PONY"))
		let force = allArr.filter(user => user.name.includes("FORCE"))
		let eBike = allArr.filter(user => user.brand.includes("E-BIKES"))
		let ideal = allArr.filter(user => user.brand.includes("IDEAL"))

		$("#all").text(allArr.length)
		$("#male").text(maleArr.length)
		$("#female").text(femaleArr.length)
		$("#grand").text(leGrandArr.length)
		$("#kross").text(kross.length)
		$("#explorer").text(explorer.length)
		$("#visitor").text(visitor.length)
		$("#pony").text(pony.length)
		$("#force").text(force.length)
		$("#eBike").text(eBike.length)
		$("#ideal").text(ideal.length)
	}

	$("li a").on("mouseover", function () {
		$(this).css({ backgroundColor: " rgb(194, 188, 188)", color: "orange" })
	})

	$("li a").on("mouseleave", function () {
		$(this).css({ backgroundColor: "unset", color: "black" })
	})

	$(".collapse i").on("mouseover", function () {
		$(this).css({ color: "orange", cursor: "pointer" })
	})

	$(".collapse i").on("mouseleave", function () {
		$(this).css({ color: "black" })
	})

	$(".icons i").on("mouseover", function () {
		$(this).css({ backgroundColor: " rgb(194, 188, 188)", color: "white", cursor: "pointer" })
	})

	$(".icons i").on("mouseleave", function () {
		$(this).css({ backgroundColor: "orange", color: "white" })
	})

	$(".col3 p").on("mouseover", function () {
		$(this).css({ color: "orange", cursor: "pointer" })
	})

	$(".col3 p").on("mouseleave", function () {
		$(this).css({ color: "black" })
	})

	$(document).on('mouseover', '.thumbnail', function () {
		$(this).css({ borderColor: 'orange', cursor: "pointer" });
	});

	$(document).on('mouseleave', '.thumbnail', function () {
		$(this).css({ borderColor: 'grey' });
	});

	$(document).on('mouseover', '.thumbnail img', function () {
		$(this).addClass("scale")
	});

	$(document).on('mouseleave', '.thumbnail img', function () {
		$(this).removeClass("scale")
	});

	$("#left p").hover(function () {
		$(this).css({ color: "orange", cursor: "pointer" })

		$(this).next("span").css({
			backgroundColor: "orange",
			color: "black",
		});
	},
		function () {
			$(this).css({ color: "black" })

			$(this).next("span").css({
				backgroundColor: "",
				color: "",
			});
		})
});
