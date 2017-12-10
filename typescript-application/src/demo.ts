/**
 * Created by idan on 12/5/2017.
 */

import {GreetingService} from '../../flow-lib/dist';

const t:GreetingService = new GreetingService();

export const greeting = t.hello('World');