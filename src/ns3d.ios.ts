import { Common } from './ns3d.common';

export class Ns3d extends Common {
    getVersionNumber() {
        var version = NSBundle.mainBundle.objectForInfoDictionaryKey("CFBundleShortVersionString");
        return version;
    }
}