import cheerio from "cheerio";
import axios from "axios";

const getBracket = async ({women} = {women: false}) => {
	let bracketURL = "http://www.espn.com/mens-college-basketball/bracketology";
	if (women) {
		bracketURL = "http://www.espn.com/womens-college-basketball/bracketology";
	}
	const webRequest = await axios.get(bracketURL);
	const $ = cheerio.load(webRequest.data);
	const bracket = $(".bracket__region");
	let regions = [];
	bracket.find("article").each((article_idx, region) => {
		const regionName = $(region).find("h4").text();
		let teams = [];
		$(region)
			.find("li")
			.each((team_idx, team) => {
				const seed = Number($(team).find(".bracket__seed").text());
				const teamName = $(team).find(".bracket__link").text();
				const playIn = teamName.includes("/");
				teams.push({
					...(playIn && { playInTeams: [teamName.split("/")] }),
					seed,
					...(!playIn && { team: teamName }),
					playIn,
				});
			});
		regions.push({ name: regionName, teams });
	});
	return { regions };
};

module.exports = getBracket;
