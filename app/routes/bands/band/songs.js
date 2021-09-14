import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class BandsBandSongsRoute extends Route {
  @service catalog;

  queryParams = {
    sortBy: {
      as: 's',
    },
    searchTerm: {
      as: 'q',
    },
  };

  async model() {
    const band = this.modelFor('bands.band');
    await this.catalog.fetchRelated(band, 'songs');

    return band;
  }

  resetController(controller) {
    controller.title = '';
    controller.showAddSong = true;
  }
}
