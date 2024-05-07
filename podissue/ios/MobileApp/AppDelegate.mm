#import "AppDelegate.h"

#import <React/RCTBundleURLProvider.h>
#import <React/RCTLog.h>
#import <React/RCTLinkingManager.h>

#import <Firebase.h>
#import <GoogleMaps/GoogleMaps.h>

#import <MSAL/MSAL.h>

#import "RNBootSplash.h"

@implementation AppDelegate

#define MSAL_SCHEME @"msauth.com.mobile"
#define APP_SCHEME  @"mobileapp"

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{

  self.moduleName = @"MobileApp";
  // You can add your custom initial props in the dictionary below.
  // They will be passed down to the ViewController used by React Native.
  self.initialProps = @{};

  return [super application:application didFinishLaunchingWithOptions:launchOptions];
}

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
  return [self bundleURL];
}

- (NSURL *)bundleURL
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}

- (UIView *)createRootViewWithBridge:(RCTBridge *)bridge
                          moduleName:(NSString *)moduleName
                           initProps:(NSDictionary *)initProps {
  UIView *rootView = [super createRootViewWithBridge:bridge moduleName:moduleName initProps:initProps];
  [RNBootSplash initWithStoryboard:@"BootSplash" rootView:rootView];
  return rootView;
}

- (BOOL)application:(UIApplication *)application openURL:(NSURL *)url options:(NSDictionary<UIApplicationOpenURLOptionsKey,id> *)options
{
  id annotation = options[UIApplicationOpenURLOptionsAnnotationKey];
  NSString* sourceApplication = options [UIApplicationOpenURLOptionsSourceApplicationKey];

  if ([[url scheme] isEqualToString:APP_SCHEME]){
      RCTLog(@"app pass");
      return [RCTLinkingManager application:application openURL:url sourceApplication:sourceApplication annotation:annotation];
  }

  return [MSALPublicClientApplication handleMSALResponse:url sourceApplication:sourceApplication];
}

@end
