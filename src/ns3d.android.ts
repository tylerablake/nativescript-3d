import { Common } from './ns3d.common';
import * as application from "tns-core-modules/application";

export class Ns3d extends Common {
    getVersionNumber() {
        var PackageManager = android.content.pm.PackageManager;
        var pkg = application.android.context.getPackageManager().getPackageInfo(application.android.context.getPackageName(),
          PackageManager.GET_META_DATA);
        return pkg.versionName;
      }
}