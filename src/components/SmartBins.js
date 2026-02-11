import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import MapComponent from './MapComponent';
import SmartFeatures from './SmartFeatures';

function SmartBins() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Indian states and cities data
  const indiaData = {
    states: [
      {
        name: 'Andhra Pradesh',
        cities: [
          {
            name: 'Amaravati',
            areas: [
              { name: 'Mangalagiri', bins: [{ id: 1, status: 'Empty', fillLevel: 10, lastCollected: '2023-10-01', lat: 16.5145, lng: 80.5112 }] },
              { name: 'Tadepalle', bins: [{ id: 2, status: 'Half', fillLevel: 50, lastCollected: '2023-10-02', lat: 16.4866, lng: 80.5265 }] }
            ]
          },
          {
            name: 'Visakhapatnam',
            areas: [
              { name: 'MVP Colony', bins: [{ id: 3, status: 'Full', fillLevel: 90, lastCollected: '2023-09-30', lat: 17.7456, lng: 83.3110 }] },
              { name: 'Dwaraka Nagar', bins: [{ id: 4, status: 'Empty', fillLevel: 20, lastCollected: '2023-10-03', lat: 17.7326, lng: 83.3016 }] }
            ]
          },
          {
            name: 'Vijayawada',
            areas: [
              { name: 'Benz Circle', bins: [{ id: 5, status: 'Half', fillLevel: 60, lastCollected: '2023-10-01', lat: 16.5184, lng: 80.6320 }] },
              { name: 'Moghalrajpuram', bins: [{ id: 6, status: 'Empty', fillLevel: 15, lastCollected: '2023-10-02', lat: 16.5062, lng: 80.6488 }] }
            ]
          },
          {
            name: 'Tirupati',
            areas: [
              { name: 'Tirumala', bins: [{ id: 124, status: 'Empty', fillLevel: 20, lastCollected: '2023-10-03', lat: 13.6288, lng: 79.4192 }] },
              { name: 'Renigunta', bins: [{ id: 125, status: 'Half', fillLevel: 55, lastCollected: '2023-10-02', lat: 13.6514, lng: 79.5067 }] }
            ]
          },
          {
            name: 'Guntur',
            areas: [
              { name: 'Brodipet', bins: [{ id: 126, status: 'Full', fillLevel: 80, lastCollected: '2023-09-30', lat: 16.3067, lng: 80.4365 }] },
              { name: 'Arundelpet', bins: [{ id: 127, status: 'Half', fillLevel: 50, lastCollected: '2023-10-01', lat: 16.3008, lng: 80.4428 }] }
            ]
          }
        ]
      },
      {
        name: 'Arunachal Pradesh',
        cities: [
          {
            name: 'Itanagar',
            areas: [
              { name: 'Naharlagun', bins: [{ id: 7, status: 'Empty', fillLevel: 25, lastCollected: '2023-10-02', lat: 27.1021, lng: 93.6906 }] },
              { name: 'Ganga Market', bins: [{ id: 8, status: 'Half', fillLevel: 55, lastCollected: '2023-10-01', lat: 27.0844, lng: 93.6053 }] }
            ]
          }
        ]
      },
      {
        name: 'Assam',
        cities: [
          {
            name: 'Guwahati',
            areas: [
              { name: 'Dispur', bins: [{ id: 9, status: 'Full', fillLevel: 85, lastCollected: '2023-09-30', lat: 26.1439, lng: 91.7885 }] },
              { name: 'Pan Bazaar', bins: [{ id: 10, status: 'Half', fillLevel: 45, lastCollected: '2023-10-01', lat: 26.1863, lng: 91.7732 }] }
            ]
          },
          {
            name: 'Dibrugarh',
            areas: [
              { name: 'Mohanbari', bins: [{ id: 11, status: 'Empty', fillLevel: 20, lastCollected: '2023-10-03', lat: 27.4844, lng: 94.9031 }] },
              { name: 'Chabua', bins: [{ id: 12, status: 'Half', fillLevel: 50, lastCollected: '2023-10-02', lat: 27.4667, lng: 95.2333 }] }
            ]
          },
          {
            name: 'Silchar',
            areas: [
              { name: 'Silchar Town', bins: [{ id: 128, status: 'Full', fillLevel: 85, lastCollected: '2023-09-30', lat: 24.8333, lng: 92.7833 }] },
              { name: 'Badarpur', bins: [{ id: 129, status: 'Half', fillLevel: 50, lastCollected: '2023-10-01', lat: 24.8667, lng: 92.6167 }] }
            ]
          },
          {
            name: 'Jorhat',
            areas: [
              { name: 'Jorhat Town', bins: [{ id: 130, status: 'Empty', fillLevel: 15, lastCollected: '2023-10-02', lat: 26.7500, lng: 94.2167 }] },
              { name: 'Mariani', bins: [{ id: 131, status: 'Half', fillLevel: 55, lastCollected: '2023-10-01', lat: 26.6667, lng: 94.3167 }] }
            ]
          },
          {
            name: 'Nagaon',
            areas: [
              { name: 'Nagaon Town', bins: [{ id: 132, status: 'Full', fillLevel: 80, lastCollected: '2023-09-30', lat: 26.3500, lng: 92.6833 }] },
              { name: 'Hojai', bins: [{ id: 133, status: 'Empty', fillLevel: 25, lastCollected: '2023-10-03', lat: 26.0000, lng: 92.8500 }] }
            ]
          }
        ]
      },
      {
        name: 'Bihar',
        cities: [
          {
            name: 'Patna',
            areas: [
              { name: 'Gandhi Maidan', bins: [{ id: 13, status: 'Full', fillLevel: 80, lastCollected: '2023-09-30', lat: 25.6127, lng: 85.1444 }] },
              { name: 'Kankarbagh', bins: [{ id: 14, status: 'Half', fillLevel: 55, lastCollected: '2023-10-01', lat: 25.5941, lng: 85.1376 }] }
            ]
          },
          {
            name: 'Gaya',
            areas: [
              { name: 'Bodh Gaya', bins: [{ id: 15, status: 'Empty', fillLevel: 15, lastCollected: '2023-10-02', lat: 24.6959, lng: 85.0126 }] },
              { name: 'Gaya Town', bins: [{ id: 16, status: 'Half', fillLevel: 45, lastCollected: '2023-10-01', lat: 24.7914, lng: 85.0002 }] }
            ]
          },
          {
            name: 'Muzaffarpur',
            areas: [
              { name: 'Mithanpura', bins: [{ id: 134, status: 'Full', fillLevel: 80, lastCollected: '2023-09-30', lat: 26.1209, lng: 85.3647 }] },
              { name: 'Ramna', bins: [{ id: 135, status: 'Half', fillLevel: 50, lastCollected: '2023-10-01', lat: 26.1167, lng: 85.3667 }] }
            ]
          },
          {
            name: 'Bhagalpur',
            areas: [
              { name: 'Tilkamanjhi', bins: [{ id: 136, status: 'Empty', fillLevel: 20, lastCollected: '2023-10-03', lat: 25.2500, lng: 87.0167 }] },
              { name: 'Sultanganj', bins: [{ id: 137, status: 'Half', fillLevel: 55, lastCollected: '2023-10-02', lat: 25.2333, lng: 86.7333 }] }
            ]
          }
        ]
      },
      {
        name: 'Chhattisgarh',
        cities: [
          {
            name: 'Raipur',
            areas: [
              { name: 'Pandri', bins: [{ id: 17, status: 'Full', fillLevel: 75, lastCollected: '2023-09-30', lat: 21.2514, lng: 81.6296 }] },
              { name: 'Shankar Nagar', bins: [{ id: 18, status: 'Half', fillLevel: 50, lastCollected: '2023-10-01', lat: 21.2376, lng: 81.6588 }] }
            ]
          },
          {
            name: 'Bhilai',
            areas: [
              { name: 'Durg', bins: [{ id: 19, status: 'Empty', fillLevel: 20, lastCollected: '2023-10-03', lat: 21.1906, lng: 81.2849 }] },
              { name: 'Bhilai Steel Plant', bins: [{ id: 20, status: 'Half', fillLevel: 55, lastCollected: '2023-10-02', lat: 21.2144, lng: 81.3844 }] }
            ]
          }
        ]
      },
      {
        name: 'Goa',
        cities: [
          {
            name: 'Panaji',
            areas: [
              { name: 'Fontainhas', bins: [{ id: 21, status: 'Empty', fillLevel: 25, lastCollected: '2023-10-02', lat: 15.4909, lng: 73.8278 }] },
              { name: 'Miramar', bins: [{ id: 22, status: 'Half', fillLevel: 45, lastCollected: '2023-10-01', lat: 15.4634, lng: 73.8022 }] }
            ]
          },
          {
            name: 'Margao',
            areas: [
              { name: 'Madgaon', bins: [{ id: 23, status: 'Full', fillLevel: 70, lastCollected: '2023-09-30', lat: 15.2760, lng: 73.9598 }] },
              { name: 'Vasco', bins: [{ id: 24, status: 'Half', fillLevel: 50, lastCollected: '2023-10-01', lat: 15.3942, lng: 73.8313 }] }
            ]
          }
        ]
      },
      {
        name: 'Gujarat',
        cities: [
          {
            name: 'Ahmedabad',
            areas: [
              { name: 'Satellite', bins: [{ id: 25, status: 'Empty', fillLevel: 10, lastCollected: '2023-10-01', lat: 23.0225, lng: 72.5714 }] },
              { name: 'Bopal', bins: [{ id: 26, status: 'Half', fillLevel: 50, lastCollected: '2023-10-02', lat: 23.0333, lng: 72.4667 }] }
            ]
          },
          {
            name: 'Surat',
            areas: [
              { name: 'City Center', bins: [{ id: 28, status: 'Empty', fillLevel: 20, lastCollected: '2023-10-03', lat: 21.1702, lng: 72.8311 }] },
              { name: 'Adajan', bins: [{ id: 29, status: 'Half', fillLevel: 60, lastCollected: '2023-10-01', lat: 21.1940, lng: 72.7930 }] }
            ]
          },
          {
            name: 'Vadodara',
            areas: [
              { name: 'Alkapuri', bins: [{ id: 30, status: 'Full', fillLevel: 85, lastCollected: '2023-09-29', lat: 22.3072, lng: 73.1812 }] },
              { name: 'Gotri', bins: [{ id: 31, status: 'Empty', fillLevel: 15, lastCollected: '2023-10-02', lat: 22.3160, lng: 73.1240 }] }
            ]
          },
          {
            name: 'Rajkot',
            areas: [
              { name: 'Kalavad Road', bins: [{ id: 32, status: 'Half', fillLevel: 45, lastCollected: '2023-10-01', lat: 22.3039, lng: 70.8022 }] },
              { name: 'Gondal Road', bins: [{ id: 33, status: 'Empty', fillLevel: 25, lastCollected: '2023-10-03', lat: 22.2910, lng: 70.7930 }] }
            ]
          },
          {
            name: 'Gandhinagar',
            areas: [
              { name: 'Sector 1', bins: [{ id: 122, status: 'Empty', fillLevel: 20, lastCollected: '2023-10-03', lat: 23.2156, lng: 72.6369 }] },
              { name: 'Sector 10', bins: [{ id: 123, status: 'Half', fillLevel: 55, lastCollected: '2023-10-02', lat: 23.2156, lng: 72.6369 }] }
            ]
          }
        ]
      },
      {
        name: 'Haryana',
        cities: [
          {
            name: 'Gurugram',
            areas: [
              { name: 'DLF Cyber City', bins: [{ id: 34, status: 'Full', fillLevel: 80, lastCollected: '2023-09-30', lat: 28.4595, lng: 77.0266 }] },
              { name: 'Sohna Road', bins: [{ id: 35, status: 'Half', fillLevel: 55, lastCollected: '2023-10-01', lat: 28.4176, lng: 77.0436 }] }
            ]
          },
          {
            name: 'Faridabad',
            areas: [
              { name: 'Sector 21', bins: [{ id: 36, status: 'Empty', fillLevel: 20, lastCollected: '2023-10-03', lat: 28.4089, lng: 77.3178 }] },
              { name: 'NIT', bins: [{ id: 37, status: 'Half', fillLevel: 50, lastCollected: '2023-10-02', lat: 28.3719, lng: 77.3263 }] }
            ]
          }
        ]
      },
      {
        name: 'Himachal Pradesh',
        cities: [
          {
            name: 'Shimla',
            areas: [
              { name: 'Mall Road', bins: [{ id: 38, status: 'Empty', fillLevel: 15, lastCollected: '2023-10-02', lat: 31.1048, lng: 77.1734 }] },
              { name: 'Ridge', bins: [{ id: 39, status: 'Half', fillLevel: 45, lastCollected: '2023-10-01', lat: 31.1025, lng: 77.1772 }] }
            ]
          },
          {
            name: 'Manali',
            areas: [
              { name: 'Old Manali', bins: [{ id: 40, status: 'Full', fillLevel: 70, lastCollected: '2023-09-30', lat: 32.2435, lng: 77.1882 }] },
              { name: 'Vashisht', bins: [{ id: 41, status: 'Half', fillLevel: 50, lastCollected: '2023-10-01', lat: 32.2532, lng: 77.1764 }] }
            ]
          }
        ]
      },
      {
        name: 'Jharkhand',
        cities: [
          {
            name: 'Ranchi',
            areas: [
              { name: 'Harmu', bins: [{ id: 42, status: 'Empty', fillLevel: 25, lastCollected: '2023-10-02', lat: 23.3635, lng: 85.3299 }] },
              { name: 'Kanke', bins: [{ id: 43, status: 'Half', fillLevel: 55, lastCollected: '2023-10-01', lat: 23.4167, lng: 85.3167 }] }
            ]
          },
          {
            name: 'Jamshedpur',
            areas: [
              { name: 'Sakchi', bins: [{ id: 44, status: 'Full', fillLevel: 75, lastCollected: '2023-09-30', lat: 22.8046, lng: 86.2029 }] },
              { name: 'Bistupur', bins: [{ id: 45, status: 'Half', fillLevel: 50, lastCollected: '2023-10-01', lat: 22.7913, lng: 86.1837 }] }
            ]
          }
        ]
      },
      {
        name: 'Karnataka',
        cities: [
          {
            name: 'Bangalore',
            areas: [
              { name: 'Indiranagar', bins: [{ id: 46, status: 'Empty', fillLevel: 15, lastCollected: '2023-10-02', lat: 12.9784, lng: 77.6408 }] },
              { name: 'Koramangala', bins: [{ id: 47, status: 'Half', fillLevel: 60, lastCollected: '2023-10-01', lat: 12.9352, lng: 77.6245 }] }
            ]
          },
          {
            name: 'Mysore',
            areas: [
              { name: 'Mysore Palace', bins: [{ id: 48, status: 'Full', fillLevel: 80, lastCollected: '2023-09-30', lat: 12.3054, lng: 76.6550 }] },
              { name: 'Chamundi Hill', bins: [{ id: 49, status: 'Half', fillLevel: 50, lastCollected: '2023-10-01', lat: 12.2958, lng: 76.6566 }] }
            ]
          }
        ]
      },
      {
        name: 'Kerala',
        cities: [
          {
            name: 'Thiruvananthapuram',
            areas: [
              { name: 'Palayam', bins: [{ id: 50, status: 'Empty', fillLevel: 20, lastCollected: '2023-10-03', lat: 8.5061, lng: 76.9415 }] },
              { name: 'Vazhuthacaud', bins: [{ id: 51, status: 'Half', fillLevel: 55, lastCollected: '2023-10-02', lat: 8.5167, lng: 76.9517 }] }
            ]
          },
          {
            name: 'Kochi',
            areas: [
              { name: 'MG Road', bins: [{ id: 52, status: 'Full', fillLevel: 75, lastCollected: '2023-09-30', lat: 9.9674, lng: 76.2454 }] },
              { name: 'Fort Kochi', bins: [{ id: 53, status: 'Half', fillLevel: 50, lastCollected: '2023-10-01', lat: 9.9633, lng: 76.2419 }] }
            ]
          }
        ]
      },
      {
        name: 'Madhya Pradesh',
        cities: [
          {
            name: 'Bhopal',
            areas: [
              { name: 'New Market', bins: [{ id: 54, status: 'Empty', fillLevel: 25, lastCollected: '2023-10-02', lat: 23.2599, lng: 77.4126 }] },
              { name: 'TT Nagar', bins: [{ id: 55, status: 'Half', fillLevel: 55, lastCollected: '2023-10-01', lat: 23.2427, lng: 77.4340 }] }
            ]
          },
          {
            name: 'Indore',
            areas: [
              { name: 'Vijay Nagar', bins: [{ id: 56, status: 'Full', fillLevel: 80, lastCollected: '2023-09-30', lat: 22.7533, lng: 75.8937 }] },
              { name: 'Palasia', bins: [{ id: 57, status: 'Half', fillLevel: 50, lastCollected: '2023-10-01', lat: 22.7196, lng: 75.8577 }] }
            ]
          }
        ]
      },
      {
        name: 'Maharashtra',
        cities: [
          {
            name: 'Mumbai',
            areas: [
              { name: 'Andheri', bins: [{ id: 58, status: 'Half', fillLevel: 55, lastCollected: '2023-10-01', lat: 19.1196, lng: 72.8465 }] },
              { name: 'Bandra', bins: [{ id: 59, status: 'Full', fillLevel: 80, lastCollected: '2023-09-30', lat: 19.0592, lng: 72.8295 }] }
            ]
          },
          {
            name: 'Pune',
            areas: [
              { name: 'Koregaon Park', bins: [{ id: 60, status: 'Empty', fillLevel: 20, lastCollected: '2023-10-02', lat: 18.5333, lng: 73.8967 }] },
              { name: 'Shivaji Nagar', bins: [{ id: 61, status: 'Half', fillLevel: 45, lastCollected: '2023-10-01', lat: 18.5314, lng: 73.8446 }] }
            ]
          },
          {
            name: 'Nagpur',
            areas: [
              { name: 'Sitabuldi', bins: [{ id: 62, status: 'Full', fillLevel: 75, lastCollected: '2023-09-30', lat: 21.1463, lng: 79.0849 }] },
              { name: 'Civil Lines', bins: [{ id: 63, status: 'Half', fillLevel: 50, lastCollected: '2023-10-01', lat: 21.1556, lng: 79.0882 }] }
            ]
          }
        ]
      },
      {
        name: 'Manipur',
        cities: [
          {
            name: 'Imphal',
            areas: [
              { name: 'Kangla', bins: [{ id: 64, status: 'Empty', fillLevel: 20, lastCollected: '2023-10-03', lat: 24.8081, lng: 93.9442 }] },
              { name: 'Paona Bazar', bins: [{ id: 65, status: 'Half', fillLevel: 55, lastCollected: '2023-10-02', lat: 24.8170, lng: 93.9360 }] }
            ]
          }
        ]
      },
      {
        name: 'Meghalaya',
        cities: [
          {
            name: 'Shillong',
            areas: [
              { name: 'Police Bazar', bins: [{ id: 66, status: 'Full', fillLevel: 70, lastCollected: '2023-09-30', lat: 25.5788, lng: 91.8933 }] },
              { name: 'Laitumkhrah', bins: [{ id: 67, status: 'Half', fillLevel: 50, lastCollected: '2023-10-01', lat: 25.5726, lng: 91.8844 }] }
            ]
          }
        ]
      },
      {
        name: 'Mizoram',
        cities: [
          {
            name: 'Aizawl',
            areas: [
              { name: 'Zarkawt', bins: [{ id: 68, status: 'Empty', fillLevel: 25, lastCollected: '2023-10-02', lat: 23.7271, lng: 92.7176 }] },
              { name: 'Bawngkawn', bins: [{ id: 69, status: 'Half', fillLevel: 55, lastCollected: '2023-10-01', lat: 23.7361, lng: 92.7089 }] }
            ]
          }
        ]
      },
      {
        name: 'Nagaland',
        cities: [
          {
            name: 'Kohima',
            areas: [
              { name: 'Kohima Village', bins: [{ id: 70, status: 'Full', fillLevel: 75, lastCollected: '2023-09-30', lat: 25.6747, lng: 94.1098 }] },
              { name: 'High School Junction', bins: [{ id: 71, status: 'Half', fillLevel: 50, lastCollected: '2023-10-01', lat: 25.6667, lng: 94.1083 }] }
            ]
          }
        ]
      },
      {
        name: 'Odisha',
        cities: [
          {
            name: 'Bhubaneswar',
            areas: [
              { name: 'Unit 1', bins: [{ id: 72, status: 'Empty', fillLevel: 20, lastCollected: '2023-10-03', lat: 20.2961, lng: 85.8245 }] },
              { name: 'Khandagiri', bins: [{ id: 73, status: 'Half', fillLevel: 55, lastCollected: '2023-10-02', lat: 20.2861, lng: 85.7999 }] }
            ]
          },
          {
            name: 'Cuttack',
            areas: [
              { name: 'Buxi Bazar', bins: [{ id: 74, status: 'Full', fillLevel: 80, lastCollected: '2023-09-30', lat: 20.4625, lng: 85.8830 }] },
              { name: 'Mangalabag', bins: [{ id: 75, status: 'Half', fillLevel: 50, lastCollected: '2023-10-01', lat: 20.4708, lng: 85.8767 }] }
            ]
          }
        ]
      },
      {
        name: 'Punjab',
        cities: [
          {
            name: 'Chandigarh',
            areas: [
              { name: 'Sector 17', bins: [{ id: 76, status: 'Empty', fillLevel: 15, lastCollected: '2023-10-02', lat: 30.7333, lng: 76.7794 }] },
              { name: 'Sector 22', bins: [{ id: 77, status: 'Half', fillLevel: 45, lastCollected: '2023-10-01', lat: 30.7194, lng: 76.7806 }] }
            ]
          },
          {
            name: 'Amritsar',
            areas: [
              { name: 'Hall Bazar', bins: [{ id: 78, status: 'Full', fillLevel: 75, lastCollected: '2023-09-30', lat: 31.6340, lng: 74.8723 }] },
              { name: 'Civil Lines', bins: [{ id: 79, status: 'Half', fillLevel: 50, lastCollected: '2023-10-01', lat: 31.6458, lng: 74.8656 }] }
            ]
          }
        ]
      },
      {
        name: 'Rajasthan',
        cities: [
          {
            name: 'Jaipur',
            areas: [
              { name: 'C Scheme', bins: [{ id: 80, status: 'Empty', fillLevel: 25, lastCollected: '2023-10-02', lat: 26.9124, lng: 75.7873 }] },
              { name: 'Vaishali Nagar', bins: [{ id: 81, status: 'Half', fillLevel: 55, lastCollected: '2023-10-01', lat: 26.8967, lng: 75.7367 }] }
            ]
          },
          {
            name: 'Udaipur',
            areas: [
              { name: 'Fateh Sagar', bins: [{ id: 82, status: 'Full', fillLevel: 70, lastCollected: '2023-09-30', lat: 24.6054, lng: 73.7441 }] },
              { name: 'City Palace', bins: [{ id: 83, status: 'Half', fillLevel: 50, lastCollected: '2023-10-01', lat: 24.5765, lng: 73.6787 }] }
            ]
          }
        ]
      },
      {
        name: 'Sikkim',
        cities: [
          {
            name: 'Gangtok',
            areas: [
              { name: 'MG Marg', bins: [{ id: 84, status: 'Empty', fillLevel: 20, lastCollected: '2023-10-03', lat: 27.3389, lng: 88.6065 }] },
              { name: 'Deorali', bins: [{ id: 85, status: 'Half', fillLevel: 55, lastCollected: '2023-10-02', lat: 27.3278, lng: 88.6122 }] }
            ]
          }
        ]
      },
      {
        name: 'Tamil Nadu',
        cities: [
          {
            name: 'Chennai',
            areas: [
              { name: 'T. Nagar', bins: [{ id: 86, status: 'Empty', fillLevel: 25, lastCollected: '2023-10-02', lat: 13.0410, lng: 80.2353 }] },
              { name: 'Adyar', bins: [{ id: 87, status: 'Half', fillLevel: 55, lastCollected: '2023-10-01', lat: 13.0067, lng: 80.2573 }] }
            ]
          },
          {
            name: 'Coimbatore',
            areas: [
              { name: 'Gandhipuram', bins: [{ id: 88, status: 'Full', fillLevel: 75, lastCollected: '2023-09-30', lat: 11.0168, lng: 76.9558 }] },
              { name: 'RS Puram', bins: [{ id: 89, status: 'Half', fillLevel: 50, lastCollected: '2023-10-01', lat: 11.0047, lng: 76.9494 }] }
            ]
          }
        ]
      },
      {
        name: 'Telangana',
        cities: [
          {
            name: 'Hyderabad',
            areas: [
              { name: 'Banjara Hills', bins: [{ id: 90, status: 'Empty', fillLevel: 20, lastCollected: '2023-10-03', lat: 17.4326, lng: 78.4071 }] },
              { name: 'Secunderabad', bins: [{ id: 91, status: 'Half', fillLevel: 55, lastCollected: '2023-10-02', lat: 17.4399, lng: 78.4983 }] }
            ]
          }
        ]
      },
      {
        name: 'Tripura',
        cities: [
          {
            name: 'Agartala',
            areas: [
              { name: 'GB Bazar', bins: [{ id: 92, status: 'Full', fillLevel: 70, lastCollected: '2023-09-30', lat: 23.8315, lng: 91.2868 }] },
              { name: 'Kunjaban', bins: [{ id: 93, status: 'Half', fillLevel: 50, lastCollected: '2023-10-01', lat: 23.8456, lng: 91.2789 }] }
            ]
          }
        ]
      },
      {
        name: 'Uttar Pradesh',
        cities: [
          {
            name: 'Lucknow',
            areas: [
              { name: 'Hazratganj', bins: [{ id: 94, status: 'Empty', fillLevel: 25, lastCollected: '2023-10-02', lat: 26.8467, lng: 80.9462 }] },
              { name: 'Gomti Nagar', bins: [{ id: 95, status: 'Half', fillLevel: 55, lastCollected: '2023-10-01', lat: 26.8567, lng: 80.9462 }] }
            ]
          },
          {
            name: 'Agra',
            areas: [
              { name: 'Taj Ganj', bins: [{ id: 96, status: 'Full', fillLevel: 80, lastCollected: '2023-09-30', lat: 27.1751, lng: 78.0421 }] },
              { name: 'Sadar Bazar', bins: [{ id: 97, status: 'Half', fillLevel: 50, lastCollected: '2023-10-01', lat: 27.2006, lng: 78.0081 }] }
            ]
          }
        ]
      },
      {
        name: 'Uttarakhand',
        cities: [
          {
            name: 'Dehradun',
            areas: [
              { name: 'Rajpur Road', bins: [{ id: 98, status: 'Empty', fillLevel: 20, lastCollected: '2023-10-03', lat: 30.3165, lng: 78.0322 }] },
              { name: 'Clock Tower', bins: [{ id: 99, status: 'Half', fillLevel: 55, lastCollected: '2023-10-02', lat: 30.3275, lng: 78.0344 }] }
            ]
          }
        ]
      },
      {
        name: 'West Bengal',
        cities: [
          {
            name: 'Kolkata',
            areas: [
              { name: 'Park Street', bins: [{ id: 100, status: 'Empty', fillLevel: 25, lastCollected: '2023-10-02', lat: 22.5586, lng: 88.3698 }] },
              { name: 'Salt Lake', bins: [{ id: 101, status: 'Half', fillLevel: 55, lastCollected: '2023-10-01', lat: 22.5756, lng: 88.4181 }] }
            ]
          },
          {
            name: 'Darjeeling',
            areas: [
              { name: 'Mall Road', bins: [{ id: 102, status: 'Full', fillLevel: 70, lastCollected: '2023-09-30', lat: 27.0551, lng: 88.2626 }] },
              { name: 'Chowrasta', bins: [{ id: 103, status: 'Half', fillLevel: 50, lastCollected: '2023-10-01', lat: 27.0597, lng: 88.2626 }] }
            ]
          }
        ]
      },
      {
        name: 'Andaman and Nicobar',
        cities: [
          {
            name: 'Port Blair',
            areas: [
              { name: 'Aberdeen Bazar', bins: [{ id: 104, status: 'Empty', fillLevel: 20, lastCollected: '2023-10-03', lat: 11.6667, lng: 92.7333 }] },
              { name: 'Phoenix Bay', bins: [{ id: 105, status: 'Half', fillLevel: 55, lastCollected: '2023-10-02', lat: 11.6611, lng: 92.7278 }] }
            ]
          }
        ]
      },
      {
        name: 'Chandigarh',
        cities: [
          {
            name: 'Chandigarh',
            areas: [
              { name: 'Sector 17', bins: [{ id: 106, status: 'Empty', fillLevel: 15, lastCollected: '2023-10-02', lat: 30.7333, lng: 76.7794 }] },
              { name: 'Sector 35', bins: [{ id: 107, status: 'Half', fillLevel: 45, lastCollected: '2023-10-01', lat: 30.7194, lng: 76.7806 }] }
            ]
          }
        ]
      },
      {
        name: 'Dadra and Nagar Haveli and Daman and Diu',
        cities: [
          {
            name: 'Daman',
            areas: [
              { name: 'Moti Daman', bins: [{ id: 108, status: 'Empty', fillLevel: 25, lastCollected: '2023-10-02', lat: 20.4283, lng: 72.8397 }] },
              { name: 'Nani Daman', bins: [{ id: 109, status: 'Half', fillLevel: 55, lastCollected: '2023-10-01', lat: 20.4147, lng: 72.8347 }] }
            ]
          }
        ]
      },
      {
        name: 'Delhi',
        cities: [
          {
            name: 'New Delhi',
            areas: [
              { name: 'Connaught Place', bins: [{ id: 110, status: 'Full', fillLevel: 85, lastCollected: '2023-09-30', lat: 28.6315, lng: 77.2167 }] },
              { name: 'Karol Bagh', bins: [{ id: 111, status: 'Half', fillLevel: 50, lastCollected: '2023-10-01', lat: 28.6514, lng: 77.1904 }] }
            ]
          }
        ]
      },
      {
        name: 'Jammu and Kashmir',
        cities: [
          {
            name: 'Srinagar',
            areas: [
              { name: 'Lal Chowk', bins: [{ id: 112, status: 'Empty', fillLevel: 20, lastCollected: '2023-10-03', lat: 34.0837, lng: 74.7973 }] },
              { name: 'Dal Gate', bins: [{ id: 113, status: 'Half', fillLevel: 55, lastCollected: '2023-10-02', lat: 34.0767, lng: 74.8083 }] }
            ]
          },
          {
            name: 'Jammu',
            areas: [
              { name: 'Raghunath Bazar', bins: [{ id: 114, status: 'Full', fillLevel: 75, lastCollected: '2023-09-30', lat: 32.7266, lng: 74.8570 }] },
              { name: 'Gandhi Nagar', bins: [{ id: 115, status: 'Half', fillLevel: 50, lastCollected: '2023-10-01', lat: 32.7156, lng: 74.8720 }] }
            ]
          }
        ]
      },
      {
        name: 'Ladakh',
        cities: [
          {
            name: 'Leh',
            areas: [
              { name: 'Main Bazar', bins: [{ id: 116, status: 'Empty', fillLevel: 15, lastCollected: '2023-10-02', lat: 34.1526, lng: 77.5770 }] },
              { name: 'Changspa', bins: [{ id: 117, status: 'Half', fillLevel: 45, lastCollected: '2023-10-01', lat: 34.1656, lng: 77.5820 }] }
            ]
          }
        ]
      },
      {
        name: 'Lakshadweep',
        cities: [
          {
            name: 'Kavaratti',
            areas: [
              { name: 'Jetty', bins: [{ id: 118, status: 'Empty', fillLevel: 20, lastCollected: '2023-10-03', lat: 10.5667, lng: 72.6333 }] },
              { name: 'Ujra', bins: [{ id: 119, status: 'Half', fillLevel: 55, lastCollected: '2023-10-02', lat: 10.5750, lng: 72.6417 }] }
            ]
          }
        ]
      },
      {
        name: 'Puducherry',
        cities: [
          {
            name: 'Pondicherry',
            areas: [
              { name: 'White Town', bins: [{ id: 120, status: 'Full', fillLevel: 70, lastCollected: '2023-09-30', lat: 11.9416, lng: 79.8083 }] },
              { name: 'Mission Street', bins: [{ id: 121, status: 'Half', fillLevel: 50, lastCollected: '2023-10-01', lat: 11.9361, lng: 79.8306 }] }
            ]
          }
        ]
      }
    ]
  };

  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [bins, setBins] = useState([]);
  const [selectedBin, setSelectedBin] = useState(null);
  const [selectedArea, setSelectedArea] = useState(null);
  const [showReportModal, setShowReportModal] = useState(false);
  const [reportData, setReportData] = useState({ issue: '', priority: 'Medium', notes: '' });
  const [scheduledCollections, setScheduledCollections] = useState([]);
  const [alerts, setAlerts] = useState([]);

  // Function to get status from fill level
  const getStatusFromFillLevel = (fillLevel) => {
    if (fillLevel <= 40) return 'Empty';
    if (fillLevel <= 80) return 'Medium';
    return 'Full';
  };

  // Auto alert for full bins
  useEffect(() => {
    const fullBins = bins.filter(bin => bin.fillLevel > 80);
    if (fullBins.length > 0) {
      const newAlerts = fullBins.map(bin => ({
        id: `alert-${bin.id}`,
        message: `Bin ${bin.id} in ${bin.area}, ${bin.city} is full (${bin.fillLevel}%) - Immediate collection required!`,
        type: 'urgent',
        timestamp: new Date().toLocaleString()
      }));
      setAlerts(newAlerts);
      // Simulated alert (in real app, this would send notification)
      alert(`Alert: ${fullBins.length} bin(s) are full and need immediate collection!`);
    } else {
      setAlerts([]);
    }
  }, [bins]);

  // Update bins when state or city changes
  useEffect(() => {
    if (selectedState && selectedCity) {
      const stateData = indiaData.states.find(s => s.name === selectedState);
      if (stateData) {
        const cityData = stateData.cities.find(c => c.name === selectedCity);
        if (cityData) {
          const newBins = cityData.areas.flatMap(area =>
            area.bins.map(bin => ({ ...bin, state: selectedState, city: selectedCity, district: selectedCity, area: area.name }))
          );
          setBins(newBins);
        }
      }
    } else {
      setBins([]);
    }
  }, [selectedState, selectedCity]);

  // Get cities for selected state
  const getCitiesForState = (stateName) => {
    const stateData = indiaData.states.find(s => s.name === stateName);
    return stateData ? stateData.cities : [];
  };

  // Get areas for selected city
  const getAreasForCity = (stateName, cityName) => {
    const stateData = indiaData.states.find(s => s.name === stateName);
    if (stateData) {
      const cityData = stateData.cities.find(c => c.name === cityName);
      return cityData ? cityData.areas : [];
    }
    return [];
  };

  // Handle state change
  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
    setSelectedCity('');
    setBins([]);
  };

  // Handle city change
  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Empty': return '🟢';
      case 'Medium': return '🟡';
      case 'Full': return '🔴';
      default: return '⚪';
    }
  };

  const updateBinStatus = (id, newStatus) => {
    const newFillLevel = newStatus === 'Empty' ? 10 : newStatus === 'Medium' ? 50 : 90;
    setBins(bins.map(bin => bin.id === id ? { ...bin, status: newStatus, fillLevel: newFillLevel } : bin));
  };

  const handleAreaClick = (district, area) => {
    setSelectedArea({ district, area });
    // Update map view (in a real app, this would update the map center/zoom)
    console.log(`Showing ${area} in ${district} on map`);
  };

  const handleScheduleClick = (scheduleItem) => {
    setSelectedArea({ district: scheduleItem.district, area: scheduleItem.area });
    setShowReportModal(true);
  };

  const submitReport = () => {
    const newSchedule = {
      id: Date.now(),
      area: selectedArea.area,
      district: selectedArea.district,
      issue: reportData.issue,
      priority: reportData.priority,
      notes: reportData.notes,
      scheduledTime: new Date().toLocaleString(),
      status: 'Scheduled'
    };
    setScheduledCollections([...scheduledCollections, newSchedule]);
    setShowReportModal(false);
    setReportData({ issue: '', priority: 'Medium', notes: '' });
    alert(`Collection scheduled for ${selectedArea.area}, ${selectedArea.district}. Truck driver notified.`);
  };

  // Get schedule for selected state and city
  const getScheduleForSelection = () => {
    if (!selectedState || !selectedCity) return [];
    const stateData = indiaData.states.find(s => s.name === selectedState);
    if (!stateData) return [];
    const cityData = stateData.cities.find(c => c.name === selectedCity);
    if (!cityData) return [];
    return cityData.areas.map(area => ({
      day: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'][Math.floor(Math.random() * 7)],
      state: selectedState,
      district: selectedCity,
      area: area.name,
      time: `${8 + Math.floor(Math.random() * 4)}:00 AM - ${12 + Math.floor(Math.random() * 4)}:00 PM`
    }));
  };

  const schedule = getScheduleForSelection();

  return (
    <div className="smart-bins-page">
      <section className="smart-bins-hero" data-aos="fade-in">
        <div className="hero-overlay">
          <h1 className="hero-title" data-aos="fade-up">Smart Bin Management</h1>
          <p className="hero-description" data-aos="fade-up" data-aos-delay="200">
            Monitor bin status, view locations on map, and check collection schedules in real-time.
          </p>
        </div>
      </section>

      <section className="bin-status-section" data-aos="fade-up">
        <h2>Smart Bin Status</h2>
        
        {/* State and City Selection */}
        <div className="location-selector" data-aos="fade-up">
          <div className="selector-group">
            <label htmlFor="state-select">Select State:</label>
            <select
              id="state-select"
              value={selectedState}
              onChange={handleStateChange}
              className="location-dropdown"
            >
              <option value="">-- Select State --</option>
              {indiaData.states.map(state => (
                <option key={state.name} value={state.name}>{state.name}</option>
              ))}
            </select>
          </div>

          <div className="selector-group">
            <label htmlFor="city-select">Select City:</label>
            <select
              id="city-select"
              value={selectedCity}
              onChange={handleCityChange}
              className="location-dropdown"
              disabled={!selectedState}
            >
              <option value="">-- Select City --</option>
              {selectedState && getCitiesForState(selectedState).map(city => (
                <option key={city.name} value={city.name}>{city.name}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Display bins for selected state and city */}
        {selectedState && selectedCity && (
          <div className="districts-container" data-aos="fade-up">
            <h3 className="selected-location-title">
              {selectedCity}, {selectedState}
            </h3>
            <div className="areas-grid">
              {getAreasForCity(selectedState, selectedCity).map(area => (
                <div key={area.name} className="area-card" data-aos="zoom-in">
                  <h4 className="area-title">{area.name}</h4>
                  <div className="bins-in-area">
                    {area.bins.map(bin => (
                      <div key={bin.id} className="bin-card" data-aos="zoom-in">
                        <div className="bin-header">
                          <span className="bin-icon">{getStatusColor(bin.status)}</span>
                          <h5>Bin {bin.id}</h5>
                        </div>
                        <p>Status: {bin.status}</p>
                        <p>Fill Level: {bin.fillLevel}%</p>
                        <p>Last Collected: {bin.lastCollected}</p>
                        <div className="controls">
                          <button onClick={() => updateBinStatus(bin.id, 'Empty')}>Empty</button>
                          <button onClick={() => updateBinStatus(bin.id, 'Medium')}>Medium</button>
                          <button onClick={() => updateBinStatus(bin.id, 'Full')}>Full</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {!selectedState && (
          <div className="selection-prompt" data-aos="fade-up">
            <p>Please select a state to view smart bin status.</p>
          </div>
        )}

        {selectedState && !selectedCity && (
          <div className="selection-prompt" data-aos="fade-up">
            <p>Please select a city in {selectedState} to view smart bin status.</p>
          </div>
        )}
      </section>

      <section className="map-section" data-aos="fade-up">
        <h2>Bin Location Map</h2>
        <p className="map-description">View all smart bins and their real-time status on the interactive map below.</p>
        {bins.length > 0 ? (
          <MapComponent 
            bins={bins} 
            complaints={scheduledCollections.map(c => ({
              id: c.id,
              lat: bins.find(b => b.area === c.area)?.lat || 20.5937,
              lng: bins.find(b => b.area === c.area)?.lng || 78.9629,
              type: c.issue,
              description: c.notes,
              status: c.status,
              date: c.scheduledTime
            }))}
            center={[bins[0].lat, bins[0].lng]}
            zoom={12}
            showFilters={true}
          />
        ) : (
          <div className="selection-prompt" data-aos="fade-up">
            <p>Please select a state and city to view bin locations on the map.</p>
          </div>
        )}
      </section>

      {/* Smart Features Section */}
      {bins.length > 0 && (
        <section className="smart-features-section" data-aos="fade-up">
          <SmartFeatures bins={bins} scheduledCollections={scheduledCollections} />
        </section>
      )}

      <section className="schedule-section" data-aos="fade-up">
        <h2>Waste Collection Schedule</h2>
        {selectedState && selectedCity ? (
          <div className="schedule-grid">
            {schedule.map((item, index) => (
              <div key={index} className="schedule-card" data-aos="zoom-in" data-aos-delay={index * 100} onClick={() => handleScheduleClick(item)}>
                <h3>{item.day}</h3>
                <p>State: {item.state}</p>
                <p>District: {item.district}</p>
                <p>Area: {item.area}</p>
                <p>Time: {item.time}</p>
                <button className="schedule-btn">Schedule Collection</button>
              </div>
            ))}
          </div>
        ) : (
          <div className="selection-prompt" data-aos="fade-up">
            <p>Please select a state and city to view waste collection schedule.</p>
          </div>
        )}
      </section>

      {showReportModal && (
        <div className="modal-overlay" onClick={() => setShowReportModal(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h3>Report Issue & Schedule Collection</h3>
            <p><strong>Area:</strong> {selectedArea.area}, {selectedArea.district}, {selectedState}</p>
            <form onSubmit={(e) => { e.preventDefault(); submitReport(); }}>
              <div className="form-group">
                <label>Issue Type:</label>
                <select
                  value={reportData.issue}
                  onChange={(e) => setReportData({...reportData, issue: e.target.value})}
                  required
                >
                  <option value="">Select Issue</option>
                  <option value="Bin Full">Bin Full</option>
                  <option value="Bin Damaged">Bin Damaged</option>
                  <option value="Overflow">Overflow</option>
                  <option value="Illegal Dumping">Illegal Dumping</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label>Priority:</label>
                <select
                  value={reportData.priority}
                  onChange={(e) => setReportData({...reportData, priority: e.target.value})}
                >
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                  <option value="Urgent">Urgent</option>
                </select>
              </div>
              <div className="form-group">
                <label>Notes:</label>
                <textarea
                  value={reportData.notes}
                  onChange={(e) => setReportData({...reportData, notes: e.target.value})}
                  placeholder="Additional details..."
                />
              </div>
              <div className="modal-buttons">
                <button type="button" onClick={() => setShowReportModal(false)}>Cancel</button>
                <button type="submit">Submit Report & Schedule Collection</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {scheduledCollections.length > 0 && (
        <section className="scheduled-collections" data-aos="fade-up">
          <h2>Scheduled Collections</h2>
          <div className="collections-list">
            {scheduledCollections.map(collection => (
              <div key={collection.id} className="collection-item">
                <h4>{collection.area}, {collection.district}, {collection.state || 'Gujarat'}</h4>
                <p><strong>Issue:</strong> {collection.issue}</p>
                <p><strong>Priority:</strong> {collection.priority}</p>
                <p><strong>Scheduled:</strong> {collection.scheduledTime}</p>
                <p><strong>Status:</strong> {collection.status}</p>
                <p><strong>Notes:</strong> {collection.notes}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export default SmartBins;
