package com.nun.poc.rn;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.AlexanderZaytsev.RNI18n.RNI18nPackage;
import com.zmxv.RNSound.RNSoundPackage;
import com.BV.LinearGradient.LinearGradientPackage;
import com.reactnative.photoview.PhotoViewPackage;
import com.horcrux.svg.SvgPackage;
import com.hieuvp.fingerprint.ReactNativeFingerprintScannerPackage;
import me.jhen.react.BadgePackage;
import cl.json.RNSharePackage;
import com.react.rnspinkit.RNSpinkitPackage;
import com.brentvatne.react.ReactVideoPackage;
import com.lwansbrough.RCTCamera.RCTCameraPackage;
import com.microsoft.codepush.react.CodePush;
import io.invertase.firebase.RNFirebasePackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.airbnb.android.react.maps.MapsPackage;
import com.imagepicker.ImagePickerPackage;
import com.dylanvann.fastimage.FastImageViewPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.lynxit.contactswrapper.ContactsWrapperPackage;
import com.kevinejohn.RNMixpanel.*;

import io.invertase.firebase.auth.RNFirebaseAuthPackage; // Firebase Auth
import io.invertase.firebase.database.RNFirebaseDatabasePackage; // Firebase Realtime Database
import io.invertase.firebase.messaging.RNFirebaseMessagingPackage; // Firebase Cloud Messaging

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {

    @Override
    protected String getJSBundleFile() {
      return CodePush.getJSBundleFile();
    }

    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(new RNMixpanel(), new MainReactPackage(),
            new RNI18nPackage(),
            new RNSoundPackage(),
            new LinearGradientPackage(),
            new PhotoViewPackage(), new SvgPackage(),
          new ReactNativeFingerprintScannerPackage(), new BadgePackage(), new RNSharePackage(), new RNSpinkitPackage(),
          new ReactVideoPackage(), new RCTCameraPackage(),
          new CodePush(getResources().getString(R.string.reactNativeCodePush_androidDeploymentKey),
              getApplicationContext(), BuildConfig.DEBUG),
          new RNFirebasePackage(), new RNFirebaseAuthPackage(), new RNFirebaseDatabasePackage(),
          new RNFirebaseMessagingPackage(),

          new VectorIconsPackage(), new MapsPackage(), new ImagePickerPackage(), new FastImageViewPackage(),
          new ContactsWrapperPackage());
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
