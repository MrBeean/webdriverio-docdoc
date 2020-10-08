const doctorsPage = require("../pageobjects/doctors.page");
const config = require("../../config/main-config");

describe("Doctors page", () => {
  beforeEach(() => {
    doctorsPage.open();
  });

  it("check page url", () => {
    let url = browser.getUrl();
    expect(url).to.equal("https://docdoc.ru/doctor");
  });

  it("doctors cards and filter schedule button are present", () => {
    doctorsPage.doctorCardPath.waitForDisplayed({
      timeout: config.elementTimeout,
    });

    expect(doctorsPage.doctorCardsPath).to.have.lengthOf(10);
    expect(doctorsPage.calendarButtonPath.getText()).to.equal(
      "Расписание на все дни"
    );
  });

  it("by default enabled all days filter", () => {
    doctorsPage.waitAndClick(doctorsPage.calendarButtonPath);

    expect(doctorsPage.calendarButtonsPath.isExisting()).to.equal(true);
    expect(doctorsPage.allDaysButtonPath.getText()).to.equal("Все дни");
    expect(doctorsPage.allDaysButtonPath.getAttribute("class")).to.contain(
      "--active"
    );
  });

  it("filter doctors schedule for tomorrow", () => {
    doctorsPage.waitAndClick(doctorsPage.calendarButtonPath);
    doctorsPage.waitAndClick(doctorsPage.oneDayAfterButtonPath);

    doctorsPage.doctorSheduleTextPath.waitForExist({
      timeout: config.elementTimeout,
    });
    doctorsPage.waitAndClick(doctorsPage.calendarButtonPath);

    expect(doctorsPage.oneDayAfterButtonPath.getText()).to.contain("Завтра");
    expect(doctorsPage.oneDayAfterButtonPath.getAttribute("class")).to.contain(
      "--active"
    );
    expect(doctorsPage.doctorCardsPath).to.have.lengthOf(10);
    doctorsPage.checkDoctorsSheduleText();
  });
});
