const doctorsPage = require("../pageobjects/doctors.page");

describe("Filter Schedule on the doctors page", () => {
  let currentDate = new Date();

  beforeEach(() => {
    doctorsPage.open();
  });

  it("check page url", () => {
    let url = browser.getUrl();
    expect(url).to.equal("https://docdoc.ru/doctor");
  });

  it("doctors and filter schedule button are present", () => {
    doctorsPage.doctorCardPath.waitForDisplayed({ timeout: 3000 });

    expect(doctorsPage.doctorCardsPath).to.have.lengthOf(10);
    expect(doctorsPage.calendarButtonPath.getText()).to.equal(
      "Расписание на все дни"
    );
  });

  it("by default enabled all days filter", () => {
    doctorsPage.calendarButtonPath.waitForDisplayed({ timeout: 3000 });
    doctorsPage.calendarButtonPath.click();

    expect(doctorsPage.calendarButtonsPath.isExisting()).to.equal(true);
    expect(doctorsPage.allDaysButtonPath.getText()).to.equal("Все дни");
    expect(doctorsPage.allDaysButtonPath.getAttribute("class")).to.contain(
      "--active"
    );
  });

  it("filter doctors schedule for tomorrow", () => {
    doctorsPage.calendarButtonPath.waitForDisplayed({ timeout: 3000 });
    doctorsPage.calendarButtonPath.click();
    doctorsPage.oneDayAfterButtonPath.click();

    doctorsPage.doctorShedulePath.waitForDisplayed({ timeout: 3000 });
    doctorsPage.calendarButtonPath.click();
    expect(doctorsPage.oneDayAfterButtonPath.getText()).to.contain("Завтра");
    expect(doctorsPage.oneDayAfterButtonPath.getAttribute("class")).to.contain(
      "--active"
    );

    doctorsPage.doctorShedulePath.waitForDisplayed({ timeout: 3000 });
    expect(doctorsPage.doctorCardsPath).to.have.lengthOf(10);

    let i = 0;
    while (i < doctorsPage.countVisibleCards()) {
      expect(
        doctorsPage.doctorCardsPath[i]
          .$('//*[@class="clinic-slots__caption"]')
          .getText()
      ).to.contain("Онлайн-расписание на " + (currentDate.getDate() + 1));
      i++;
    }
  });
});
