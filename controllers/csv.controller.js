const { models } = require("./../libs/sequelize");

const CvsParser = require("json2csv").Parser;

const download = async (req, res, next) => {
  await models.Assistant.findAll().then((assistants) => {
    let listAssistants = [];

    assistants.forEach((assistant) => {
      const { id, firstName, lastName, email, country, jobTitle, createdAt } =
        assistant;
      listAssistants.push({
        id,
        firstName,
        lastName,
        email,
        country,
        jobTitle,
        createdAt,
      });
    });

    const cvsFields = [
      "id",
      "first_name",
      "last_name",
      "email",
      "country",
      "job_title",
      "created_at",
    ];
    const cvsParser = new CvsParser({ cvsFields });
    const cvsData = cvsParser.parse(listAssistants);

    res.set("Content-Type", "text/csv");
    res.setHeader("Content-disposition", "attachment; filename=assistants.csv");

    res.status(200).end(cvsData);
  });
};

module.exports = { download };
