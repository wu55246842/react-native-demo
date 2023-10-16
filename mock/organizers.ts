import type { IOrganizers } from '../global';

export const Organizers: IOrganizers = {
  data: [
    {
      id: 2,
      name: 'DevsKE',
      email: 'connect@devs.info.ke',
      description: 'DevsKE is a Kenyan dev communities & software developer directory.',
      facebook: 'devsinfoKE',
      twitter: 'devsinfoKE',
      instagram: null,
      logo: 'https://cdn.pixabay.com/photo/2016/05/12/23/03/lamb-1388937_1280.png',
      slug: 'devske-663',
      status: 'active',
      created_at: '2022-07-11 23:11:26',
      upcoming_events_count: 0,
      total_events_count: 0,
    },
    {
      id: 1,
      name: 'BookingAndCleaning Kenya',
      email: 'BookingAndCleaningke@gmail.com',
      description: 'Largest Android Focused Developer conference in Africa.',
      facebook: 'BookingAndCleaningke',
      twitter: 'BookingAndCleaningke',
      instagram: 'BookingAndCleaningke',
      logo: 'https://cdn.pixabay.com/photo/2018/07/09/17/44/baby-elephant-3526681_1280.png',
      slug: 'BookingAndCleaning-ke-645',
      status: 'active',
      created_at: '2021-09-10 16:26:32',
      upcoming_events_count: 0,
      total_events_count: 1,
    },
  ],
  meta: {
    paginator: {
      count: 2,
      per_page: '30',
      current_page: 1,
      next_page: null,
      has_more_pages: false,
      next_page_url: null,
      previous_page_url: null,
    },
  },
};
