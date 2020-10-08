const Page = require("./page");

class DoctorsPage extends Page {
  get doctorCardsPath() {
    return $$('//*[@data-test-id="doctor-card-search-results"]');
  }

  get doctorCardPath() {
    return $('//*[@data-test-id="doctor-card-search-results"]');
  }

  get doctorShedulePath() {
    return $('//*[@class="clinic-slots__caption"]');
  }

  get calendarButtonPath() {
    return $(
      '//div[@class="select-box"]/button[@data-test-id="calendar-button"]'
    );
  }

  get calendarButtonsPath() {
    return $('//*[@class="select-box__options"]');
  }

  get todayButtonPath() {
    return $('//div[@class="select-box__options"]/button[1]');
  }

  get oneDayAfterButtonPath() {
    return $('//div[@class="select-box__options"]/button[2]');
  }

  get twoDayAfterButtonPath() {
    return $('//div[@class="select-box__options"]/button[3]');
  }

  get threeDayAfterButtonPath() {
    return $('//div[@class="select-box__options"]/button[4]');
  }

  get allDaysButtonPath() {
    return $('//div[@class="select-box__options"]/button[5]');
  }

  open() {
    return super.open("doctor");
  }

  countVisibleCards() {
    let cards = 0;
    for (let doctor in this.doctorCardsPath) {
      if (!isNaN(Number(doctor))) {
        cards += 1;
      }
    }

    return cards;
  }
}

module.exports = new DoctorsPage();
